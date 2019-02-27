let AudioManager = require("AudioManager");
let Main = require("Main");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
    },

    onEnable() {
        this.onToggle();
    },

    start() {

    },

    setPoint(point, chapterLevel) {
        // console.log("Car-setPoint");
        // console.log(point);
        // {
        //     startX: [-300,-150,0],
        //     startY: [1100],
        //     rotation: 270, // left: 0, down: 270, right:180, up:90
        //     vx:0,   
        //     vy:-150
        // }
        this.point = point;
        this.node.x = point.startX[Math.floor(point.startX.length * Math.random())] + (-5 + Math.random() * 10);
        this.node.y = point.startY[Math.floor(point.startY.length * Math.random())] + (-5 + Math.random() * 10);

        let carSpeedScale = (chapterLevel*0.01 + 1) * (1 + Math.random());
        this.vx = carSpeedScale * this.point.vx;
        this.vy = carSpeedScale * this.point.vy;
    },

    move() {
        // console.log("Car-move");
        // console.log(this.point);
        this.node.rotation = this.point.rotation;
        let rigidbody = this.node.getComponent(cc.RigidBody);
        console.log(this.vx, this.vy);
        rigidbody.linearVelocity = cc.v2(this.vx, this.vy);
    },

    onToggle() {
        // console.log("Car-onToggle");
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            let rigidbody = this.node.getComponent(cc.RigidBody);
            this.shine();
            if (this.isStoping) {
                this.isStoping = false;
                rigidbody.linearVelocity = cc.v2(this.vx, this.vy);
            } else {
                this.isStoping = true;
                rigidbody.linearVelocity = cc.v2(0, 0);
            }
        }, this);
    },

    shine(){
        this.node.theCar.color = new cc.Color(180,180,180);
        this.node.scale = 1.05;
        setTimeout(()=>{
            this.node.scale = 1.0;
            this.node.theCar.color = new cc.Color(255,255,255);
        },100);
    },

    sendGameOverEvent(){

    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        console.log("car-onBeginContact");
        if(Main.instance.isGameStart == false) return;

        // console.log("selfCollider, otherCollider :");
        // console.log(selfCollider, otherCollider);
        
        let r1 = selfCollider.node.getComponent("Car").point.rotation;
        let r2 = otherCollider.node.getComponent("Car").point.rotation;

        if(r1 != r2){
            AudioManager.instance.play("crash");
            selfCollider.node.getComponent("Car").shine();
            Main.instance.makeCollision((r1+r2) / 2);  // up:0, right:1, down:2, left:3 
            setTimeout(()=>{
                Main.instance.gameOver();
            },2000);
        }
    },

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact: function (contact, selfCollider, otherCollider) {
        // console.log("car-onEndContact");
    },

    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve: function (contact, selfCollider, otherCollider) {
        // console.log("car-onPreSolve");
    },

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve: function (contact, selfCollider, otherCollider) {
        // console.log("car-onPostSolve");
    },
    // update (dt) {},


});
