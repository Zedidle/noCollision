let UserDataManager = require("UserDataManager");

let CarShop = cc.Class({
    extends: cc.Component,

    properties: {
        Car: cc.Prefab,

        carContent: cc.Node,
        ui: cc.Node,

    },

    statics: {
        instance: null,
    },

    ctor() {
        if (!CarShop.instance) {
            CarShop.instance = this;
        }
    },


    onEnable() {

    },
    onLoad() {
        console.log("carShop-onLoad");
        this.initCarContent();
    },

    initCarContent() {
        console.log("CarShop-initCarContent");
        let carTotalNum = 43;
        let carLevel = UserDataManager.getUserData().carLevel;
        for (let i = 0; i < carTotalNum; i++) {
            let car = cc.instantiate(this.Car);
            car.removeComponent(cc.RigidBody);
            car.removeComponent(cc.PhysicsPolygonCollider);
            car.removeComponent(cc.BoxCollider);

            car._isGoods = true;
            let priceTag = car.getChildByName("priceTag"),
                subText = car.getChildByName("subText"),
                blackCar = car.getChildByName("blackCar");
            if (i < carLevel) {
                car.getChildByName("car_" + i).active = true;
                priceTag.active = false;
                blackCar.active = false;
                subText.getChildByName("value").getComponent(cc.Label).string = "$" + (i + 1) * 20;
            } else {
                priceTag.getChildByName("txt").getComponent(cc.Label).string = "$" + (i + 1) * 200;
                blackCar.active = true;
                subText.active = false;
                this.setTabFunc(car);
            }
            this.carContent.addChild(car);
        }
    },

    setTabFunc(carNode) {
        if (carNode._hadSetTabFunc) return;
        carNode._hadSetTabFunc = true;
        carNode.on(cc.Node.EventType.TOUCH_START, () => {
            console.log("car item test tap");
        }, this);
    },

    start() {

    },

    open() {
        this.node.active = true;
        this.ui.active = false;
    },

    close() {
        this.node.active = false;
        this.ui.active = true;
    },

    // update (dt) {},
});
