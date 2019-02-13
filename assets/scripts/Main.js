let UserDataManager = require("UserDataManager");
let BoardPointsManager = require("BoardPointsManager");
let AudioManager = require("AudioManager");

cc.Class({
    extends: cc.Component,

    properties: {
        Car: cc.Prefab,
        boards: cc.Node,
        cashLineLongContent: cc.Node,
    },

    onLoad() {
        console.log("Main-onload");

        cc.director.getPhysicsManager().enabled = true;
        this.chapterLevel = 1;
        this.setGravity(0);
        this.gameStart();

        setInterval(() => {
            this.createCar().getComponent("Car").move();
        }, this.carInterval);

        this.testDollar();
    },

    testDollar() {
        console.log("Main-testDollar");

        // console.log(this.cashLineLongContent.parent.getComponent(cc.BoxCollider));

        this.cashLineLongContent.on(cc.Node.EventType.TOUCH_START, () => {
            AudioManager.instance.play("explosion");

            let level = Math.ceil(Math.random() * 43);
            let money = this.cashLineLongContent.parent.getChildByName("money");
            money.active = true;
            money.getComponent(cc.Label).string = "$" + level*20;

            let down1 = cc.moveTo(0.4,0,0);
            let down2 = cc.moveTo(0.1,0,0);
            let down3 = cc.moveTo(0.03,0,0);
            let up1 = cc.moveTo(0.1,0,25);
            let up2 = cc.moveTo(0.03,0,5);
            down1.easing(cc.easeIn(3.0));
            down2.easing(cc.easeIn(3.0));
            down3.easing(cc.easeIn(3.0));
            up1.easing(cc.easeOut(3.0));
            up2.easing(cc.easeOut(3.0));
            money.runAction(cc.sequence(
                down1,up1,down2,up2,down3,
                cc.callFunc(()=>{
                    money.y = 100;
                    money.active = false;
                })
            ));

            let cashLineLong = this.cashLineLongContent.getChildByName("cashLineLong");
            cashLineLong.opacity = 0;
            cashLineLong.runAction(cc.sequence(
                cc.spawn(
                    cc.fadeTo(0.15,255), 
                    cc.scaleTo(0.15, 1.05),
                ),
                cc.spawn(
                    cc.fadeTo(0.3,0), 
                    cc.scaleTo(0.15, 1),
                )
            ));
        }, this);
    },

    gameStart() {
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
        this.boardPoints = BoardPointsManager.getBoardPoints(boardIndex);
    },

    createCar() {
        console.log("Main-createCar");
        let point = this.boardPoints[Math.floor(Math.random() * this.boardPoints.length)];
        // console.log(point);

        let carLevel = Math.floor(Math.random() * UserDataManager.getUserData().carLevel);
        let car = cc.instantiate(this.Car);
        car.getComponent("Car").setPoint(point, this.chapterLevel);

        let theCar = car.getChildByName("car_" + carLevel);
        theCar.active = true;
        car.width = theCar.width;
        car.height = theCar.height;
        car.theCar = theCar;
        car.level = carLevel;

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


    start() {

    },

    // update (dt) {},
});
