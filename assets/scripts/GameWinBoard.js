let Menu = require("Menu");

let GameWinBoard = cc.Class({
    extends: cc.Component,

    properties: {

    },

    statics:{
        instance:null,
    },

    ctor(){
        if(!GameWinBoard.instance){
            GameWinBoard.instance = this;
        }
    },

    onLoad () {},

    start () {
        
    },

    open(){
        this.node.opacity = 0;
        this.node.active = true;
        this.node.runAction(cc.fadeTo(1.5,255));
    },
    toMenu(){
        this.node.active = false;
        
        Menu.instance.open();

    },

    update (dt) {},
});
