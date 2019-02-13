let AudioManager = require("AudioManager");

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
        console.log("Car-setPoint");
        console.log(point);
        this.point = point;
        this.node.x = point.startX[Math.floor(point.startX.length * Math.random())];
        this.node.y = point.startY[Math.floor(point.startY.length * Math.random())];

        let carSpeedScale = (chapterLevel*0.01 + 1) * (1 + Math.random());
        this.vx = carSpeedScale * this.point.vx;
        this.vy = carSpeedScale * this.point.vy;
    },

    move() {
        // console.log("Car-move");
        // console.log(this.point);
        this.node.rotation = this.point.rotation;
        let rigidbody = this.node.getComponent(cc.RigidBody);
        rigidbody.linearVelocity = cc.v2(this.vx, this.vy);

    },

    onToggle() {
        console.log("Car-onToggle");
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            let rigidbody = this.node.getComponent(cc.RigidBody);
            this.node.theCar.color = new cc.Color(180,180,180);
            this.node.scale = 1.05;
            setTimeout(()=>{
                this.node.scale = 1.0;
                this.node.theCar.color = new cc.Color(255,255,255);
            },100);
            if (this.isStoping) {
                this.isStoping = false;
                rigidbody.linearVelocity = cc.v2(this.vx, this.vy);
            } else {
                this.isStoping = true;
                rigidbody.linearVelocity = cc.v2(0, 0);
            }
        }, this);
    },


    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        console.log("car-onBeginContact");
        AudioManager.instance.play("crash");
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
    }
    // update (dt) {},
});
