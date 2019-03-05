let UserDataManager = require("UserDataManager");


let Menu = cc.Class({
    extends: cc.Component,

    properties: {
        carBtn: cc.Node,
        playBtn: cc.Node,
        dollarLabel: cc.Label,

    },

    statics:{
        instance:null,
    },

    ctor(){
        if(!Menu.instance){
            Menu.instance = this;
        }
    },

    onEnable(){
        this.updateDollarLabel();
        this.updateCarBtn();
    },

    onLoad () {
        this.playBtn.runAction(
            cc.repeatForever(
                cc.sequence(
                    cc.scaleTo(0.3,1.1),
                    cc.scaleTo(0.3,1)
                )
            )
        );
    },

    updateDollarLabel(){
        this.dollarLabel.string = "$" + UserDataManager.getUserData().dollar;
    },

    updateCarBtn(){
        let Car = this.carBtn.getChildByName("Car");
        let carLevel = UserDataManager.getUserData().carLevel;

        for(let car of Car.children) {
            car.active = false;
        }
        Car.getChildByName("car_"+carLevel).active = true;
    },

    start () {

    },

    open(){
        console.log("Menu-open");
        this.node.active = true;
    },

    hide(){
        console.log("Menu-hide");
        this.node.active = false;
    }

    // update (dt) {},
});
