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
        this.initCarContent2();
        // this.initCarContent();
    },

    initCarContent2(){
        console.log("CarShop-initCarContent2");
        let cars = this.carContent.children;
        console.log(cars);
    },

    initCarContent() {
        console.log("CarShop-initCarContent");
        for (let item of this.carContent.children) item.removeFromParent();

        // this.carContent.height = 0;

        let startX = 0, startY = 130;
        let gapX = 20, gapY = 20;
        let perWidth = 400, perHeight = 260;

        let carTotalNum = 43;
        let carLevel = UserDataManager.getUserData().carLevel;
        for (let i = 0; i < carTotalNum; i++) {
            let car = cc.instantiate(this.Car);
            if (i % 2 == 0) {
                car.x = startX - 240 - gapX;
                // this.carContent.height += perHeight + gapY;
                // console.log("this.carContent.height",this.carContent.height);
            } else {
                car.x = startX + 240 + gapX;
            }
            car.y = - (startY + Math.floor(i / 2) * (perHeight + gapY));

            car._isGoods = true;
            let priceTag = car.getChildByName("priceTag"),
                subText = car.getChildByName("subText");
            if (i < carLevel) {
                car.getChildByName("car_" + i).active = true;
                priceTag.active = false;
                subText.getChildByName("value").getComponent(cc.Label).string = "$" + (i + 1) * 20;
            } else {
                priceTag.getChildByName("txt").getComponent(cc.Label).string = "$" + (i + 1) * 200;
                subText.active = false;
                this.setTabFunc(car);
            }
            this.carContent.addChild(car);
        }
        this.carContent.height = 4000;

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
