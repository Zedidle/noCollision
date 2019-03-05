let UserDataManager = require("UserDataManager");
let BoardsManager = require("BoardsManager");
let Menu = require("Menu");
let GameWinBoard = require("GameWinBoard");
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
        howToPlay: cc.Node,
        settingBoard: cc.Node,
        chapterLine: cc.Node,
        gameWinBoard: cc.Node,
        cashDollar: cc.Node,

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
        UserDataManager.loadUserData();

        this.cashDollar.active = false;
        console.log("Main-onload");
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        this.chapterExp = 0;
        this.chapterLevel = UserDataManager.getUserData().chapterLevel;

        this.carPool = new cc.NodePool();
        this.cashLinePool = new cc.NodePool();

        this.isGameStart = false;
        this.camera = this.node.getChildByName("camera");
        this.setGravity(0);
        this.updateChapterLine(0);

        this.updateBoard();
        Menu.instance.open();

    },

    gameStart() {
        console.log("Main-gameStart");

        this.destroyAllCarsAndCashLines();
        Menu.instance.hide();

        this.firstPass = true;
        this.cashDollar.active = false;

        this.isGameStart = true;
        this.hadCollision = false;

        this.camera.getComponent(cc.Camera).zoomRatio = 1;
        this.camera.x = 0, this.camera.y = 0;
        this.chapterLevel = UserDataManager.getUserData().chapterLevel;

        this.updateBoard();

        this.carInterval = 2000 - this.boardLevel * 10;
        clearInterval(this.createCarInterval);
        this.createCarInterval = setInterval(() => {
            if (!this.isGameStart) return;
            this.createCar().getComponent("Car").move();
        }, this.carInterval);

        let boardData = BoardsManager.getBoardData(this.boardLevel);
        this.startPoints = boardData.startPoints;
        this.cashLines = boardData.cashLines;
        this.createCashLines();
        this.chapterExp = 0;
        this.updateChapterLine(0);

    },


    updateBoard() {
        this.boardLevel = this.adjustBoardLevel(this.chapterLevel);
        let boards = this.boards.children;
        for (let board of boards) board.active = false;
        let theBoard = this.boards.getChildByName("board" + this.boardLevel);
        theBoard.active = true;
        theBoard.color = this.getWeather(this.chapterLevel);
    },

    updateChapterLine(addExp) {


        let left = this.chapterLine.getChildByName("leftCircleMask"),
            right = this.chapterLine.getChildByName("rightCircleMask");

        left.getChildByName("color").active = true;
        left.getChildByName("txt").getComponent(cc.Label).string = this.chapterLevel;
        right.getChildByName("txt").getComponent(cc.Label).string = this.chapterLevel + 1;
        let chapterPassExp = this.chapterLevel * 30;
        this.chapterExp += addExp;

        this.cashDollar.getComponent(cc.Label).string = "$" + this.chapterExp;
        this.cashDollar.stopAllActions();
        this.cashDollar.scale = 1.5;
        this.cashDollar.opacity = 0;
        this.cashDollar.runAction(cc.spawn( cc.scaleTo(0.5, 1), cc.fadeTo(0.5, 255)));

        let rate = this.chapterExp / chapterPassExp;
        if (rate >= 1) {
            rate = 1;
            this.gameWin();
            right.getChildByName("color").active = true;
        }
        this.chapterLine.getChildByName("line").scaleX = rate;
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
        console.log("Main-createCar");

        let point = this.startPoints[Math.floor(Math.random() * this.startPoints.length)];
        let carLevel = Math.floor(Math.random() * UserDataManager.getUserData().carLevel);
        let car;
        if (this.carPool.size() > 0) {
            car = this.carPool.get();
        } else {
            car = cc.instantiate(this.Car);
        }

        car.getComponent("Car").setPoint(point, this.chapterLevel);
        for (let c of car.children) c.active = false;

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
        if (r1 < 90 || r2 < 90) {
            theX = -90;
        } else if (r1 < 180 || r2 < 180) {
            theY = 90;
        } else if (r1 < 270 || r2 < 270) {
            theX = 90;
        } else {
            theY = -90;
        }

        let move = cc.moveTo(2, theX, theY);
        move.easing(cc.easeOut(3));
        this.camera.runAction(move);
    },

    destroyAllCarsAndCashLines() {
        console.log("Main-destroyAllCarsAndCashLines");
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
        this.isGameStart = false;

        this.node.runAction(cc.sequence(cc.rotateTo(1, 720), cc.rotateTo(1, 0)));
        this.node.runAction(cc.sequence(cc.scaleTo(1, 1.5), cc.scaleTo(1, 1)));

        UserDataManager.saveUserData2("dollar", UserDataManager.getUserData().dollar + this.chapterExp);
        UserDataManager.saveUserData2("chapterLevel", this.chapterLevel + 1);

        setTimeout(() => {
            this.destroyAllCarsAndCashLines();
            GameWinBoard.instance.open();
        }, 1000);
    },

    gameOver() {
        console.log("Main-gameOver");
        this.isGameStart = false;
        this.camera.getComponent(cc.Camera).zoomRatio = 1;

        this.camera.x = 0;
        this.camera.y = 0;
        Menu.instance.open();
        this.destroyAllCarsAndCashLines();
        clearInterval(this.createCarInterval);
    },


    showHowToPlay() {
        this.howToPlay.active = true;
    },
    hideHowToPlay() {
        this.howToPlay.active = false;
    },

    showSettingBoard() {
        this.settingBoard.active = true;
    },
    hideSettingBoard() {
        this.settingBoard.active = false;
    },




    start() {

    },

    // update (dt) {},
});
