let UserDataManager = require("UserDataManager");
let BoardsManager = require("BoardsManager");
let AudioManager = require("AudioManager");

let Main = cc.Class({
    extends: cc.Component,

    properties: {
        Car: cc.Prefab,
        CashLine: cc.Prefab,
        boards: cc.Node,
        whiteShine: cc.Node,
        activeCashLines: cc.Node,
        activeCars: cc.Node,
    },

    statics: {
        instance: null,
    },

    ctor() {
        if (!Main.instance) {
            Main.instance = this;
        }
    },

    onLoad() {
        console.log("Main-onload");
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;

        this.carPool = new cc.NodePool();
        this.cashLinePool = new cc.NodePool();

        this.isGameStart = false;
        this.camera = this.node.getChildByName("camera");
        this.setGravity(0);
        this.gameStart();

        setInterval(() => {
            if (this.isGameStart == false) return;
            this.createCar().getComponent("Car").move();
        }, this.carInterval);
    },

    gameStart() {
        console.log("Main-gameStart");
        this.destroyAllCarsAndCashLines();

        this.isGameStart = true;
        this.hadCollision = false;

        this.camera.getComponent(cc.Camera).zoomRatio = 1;
        this.camera.x = 0, this.camera.y = 0;

        this.chapterLevel = UserDataManager.getUserData().chapterLevel;
        this.boardLevel = this.adjustBoardLevel(this.chapterLevel);

        this.carInterval = 2000 - this.boardLevel * 10;

        let boards = this.boards.children;
        for (let board of boards) {
            board.active = false;
        }
        let theBoard = this.boards.getChildByName("board" + this.boardLevel);
        theBoard.active = true;
        theBoard.color = this.getWeather(this.chapterLevel);

        let boardData = BoardsManager.getBoardData(this.boardLevel);
        this.startPoints = boardData.startPoints;
        this.cashLines = boardData.cashLines;
        this.createCashLines();
    },

    adjustBoardLevel(theLevel) {
        if (theLevel == 6) {
            return 0;
        } else {
            return theLevel;
        }
    },

    getWeather(chapterLevel) {
        let sunColor = new cc.Color(255, 255, 255);
        let midNightColor = new cc.Color(201, 146, 159);
        let nightColor = new cc.Color(122, 128, 156);

        let d = chapterLevel % 9;
        if (d < 3) {
            return sunColor
        } else if (d < 6) {
            return midNightColor;
        } else {
            return nightColor;
        }
    },

    createCashLines() {
        console.log("Main-createCashLines");
        console.log("cashLines:", cashLines);
        let cashLines = this.cashLines;
        for (let cashLine of cashLines) {
            let theCashLine;
            if (this.cashLinePool.size() > 0) {
                theCashLine = this.cashLinePool.get();
            } else {
                theCashLine = cc.instantiate(this.CashLine);
            }
            theCashLine.x = cashLine.x;
            theCashLine.y = cashLine.y;
            theCashLine.getChildByName("cashLineLongContent").rotation = cashLine.rota;
            theCashLine.getChildByName("cashLineLongContent").scaleX = cashLine.scaleX;
            this.activeCashLines.addChild(theCashLine);
        }
    },

    createCar() {
        // console.log("Main-createCar");
        let point = this.startPoints[Math.floor(Math.random() * this.startPoints.length)];
        // console.log(point);

        let carLevel = Math.floor(Math.random() * UserDataManager.getUserData().carLevel);
        let car;
        if (this.carPool.size() > 0) {
            car = this.carPool.get();
        } else {
            car = cc.instantiate(this.Car);
            
        }
        car.getComponent("Car").setPoint(point, this.chapterLevel);
        for (let item of car.children) {
            item.active = false;
        }

        let theCar = car.getChildByName("car_" + carLevel);
        theCar.active = true;
        car.width = theCar.width;
        car.height = theCar.height;
        car.theCar = theCar;
        car.carLevel = carLevel;

        let colliderPoints = car.getComponent(cc.PhysicsPolygonCollider).points;

        // 修改顺序: 第3象限 -> 第4象限 -> 第1象限 -> 第2象限， 否则会导致碰撞线交错而报错
        colliderPoints[0].x = -car.width / 2.2;
        colliderPoints[0].y = -car.height / 2.2;
        colliderPoints[1].x = car.width / 2.2;
        colliderPoints[1].y = -car.height / 2.2;
        colliderPoints[2].x = car.width / 2.2;
        colliderPoints[2].y = car.height / 2.2;
        colliderPoints[3].x = -car.width / 2.2;
        colliderPoints[3].y = car.height / 2.2;

        let rigidbody = car.getComponent(cc.RigidBody);
        rigidbody.enabledContactListener = true;
        this.activeCars.addChild(car);
        return car;
    },

    setGravity(g) {
        cc.director.getPhysicsManager().gravity = cc.v2(0, -32 * g);
    },

    makeCollision(r1, r2) {
        console.log("Main-makeCollision");
        if (this.hadCollision) return;
        this.hadCollision = true;

        this.camera.getComponent(cc.Camera).zoomRatio = 1.2;
        this.whiteShine.active = true;
        this.whiteShine.runAction(cc.sequence(
            cc.fadeTo(0.1, 150),
            cc.fadeTo(0.1, 40),
            cc.callFunc(() => {
                this.whiteShine.active = false;
            })
        ));
        let theX = 0, theY = 0;
        if(r1 < 90 || r2 < 90){
            theX = -90;
        }else if(r1 < 180 || r2 < 180){
            theY = 90;
        }else if(r1 < 270 || r2 < 270){
            theX = 90;
        }else{
            theY = -90;
        }

        let move = cc.moveTo(5, theX, theY);
        move.easing(cc.easeOut(3));
        this.camera.runAction(move);
    },

    destroyAllCarsAndCashLines() {
        let activeCashLines = this.activeCashLines.children;
        for (let cashLine of activeCashLines) {
            this.cashLinePool.put(cashLine);
        }
        let activeCars = this.activeCars.children;
        for (let car of activeCars) {
            this.carPool.put(car);
        }
    },

    gameWin() {
        console.log("Main-gameWin");
    },

    gameOver() {
        console.log("Main-gameOver");

    },

    start() {

    },

    // update (dt) {},
});
