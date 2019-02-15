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
    },

    statics:{
        instance: null,
    },

    ctor(){
        if(!Main.instance){
            Main.instance = this;
        }
    },

    onLoad() {
        console.log("Main-onload");
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;

        this.isGameStart = false;
        this.camera = this.node.getChildByName("camera");
        this.setGravity(0);
        this.gameStart();

        setInterval(() => {
            this.createCar().getComponent("Car").move();
        }, this.carInterval);

    },

    gameStart() {
        this.isGameStart = true;
        this.hadCollision = false;

        this.camera.getComponent(cc.Camera).zoomRatio = 1;
        this.camera.x = 0, this.camera.y = 0;

        console.log("Main-gameStart");
        this.chapterLevel = UserDataManager.getUserData().chapterLevel;
        this.carInterval = 3000 - this.chapterLevel * 20;

        let boardIndex = (this.chapterLevel - 1) % 10;
        console.log(boardIndex);
        let boards = this.boards.children;
        for (let board of boards) {
            board.active = false;
        }
        this.boards.getChildByName("board" + boardIndex).active = true;
        let boardData = BoardsManager.getBoardData(boardIndex);
        this.startPoints = boardData.startPoints;
        this.cashLines = boardData.cashLines;

        this.createCashLine();
    },

    createCashLine() {
        let cashLines = this.cashLines;
        for (let cashLine of cashLines) {
            let theCashLine = cc.instantiate(this.CashLine);
            theCashLine.x = cashLine.x;
            theCashLine.y = cashLine.y;
            theCashLine.getChildByName("cashLineLongContent").rotation = cashLine.rotation;
            theCashLine.getChildByName("cashLineLongContent").scaleX = cashLine.longScale;
            this.node.addChild(theCashLine);
        }
    },

    createCar() {
        console.log("Main-createCar");
        let point = this.startPoints[Math.floor(Math.random() * this.startPoints.length)];
        // console.log(point);

        let carLevel = Math.floor(Math.random() * UserDataManager.getUserData().carLevel);
        let car = cc.instantiate(this.Car);
        car.getComponent("Car").setPoint(point, this.chapterLevel);

        let theCar = car.getChildByName("car_" + carLevel);
        theCar.active = true;
        car.width = theCar.width;
        car.height = theCar.height;
        car.theCar = theCar;
        car.carLevel = carLevel;

        let colliderPoints = car.getComponent(cc.PhysicsPolygonCollider).points;

        // 修改顺序 第3象限 -> 第4象限 -> 第1象限 -> 第2象限， 否则会导致碰撞线交错而报错
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
        this.node.addChild(car);
        return car;
    },

    setGravity(g) {
        cc.director.getPhysicsManager().gravity = cc.v2(0, -32 * g);
    },

    makeCollision(rotation){
        if(this.hadCollision) return;
        this.hadCollision = true;

        console.log("Main-makeCollision");
        console.log("rotation", rotation);
        
        this.camera.getComponent(cc.Camera).zoomRatio = 1.2;
        this.whiteShine.active = true;
        this.whiteShine.runAction(cc.sequence(
            cc.fadeTo(0.1, 150),
            cc.fadeTo(0.1, 40),
            cc.callFunc(()=>{
                this.whiteShine.active = false;
            })
        ));
        let theX=0, theY=0;
        if(rotation < 90){
            theX = -100;
            theY = 100;
        }else if(rotation < 180){
            theX = 100;
            theY = 100;
        }else if(rotation < 270){
            theX = 100;
            theY = -100;
        }else{
            theX = -100;
            theY = -100;
        }

        let move = cc.moveTo(5, theX, theY);
        move.easing(cc.easeOut(3));
        this.camera.runAction(move);
    },

    gameOver(){
        if(!this.isGameStart) return;
        this.isGameStart = false;
        console.log("Main-gameOver");


    },

    start() {

    },

    // update (dt) {},
});
