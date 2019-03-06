let AudioManager = require("AudioManager");
let Main = require("Main");


cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
    },

    onEnable() {
        this.isStoping = false;
        this.onToggle();

    },

    start() {

    },

    setPoint(point, chapterLevel) {
        // console.log("Car-setPoint");
        // console.log("point:", point);
        this.point = point;

        this.node.x = point.x[Math.floor(point.x.length * Math.random())] + (-5 + Math.random() * 10);
        this.node.y = point.y[Math.floor(point.y.length * Math.random())] + (-5 + Math.random() * 10);

        let self = this;
        this.node._iniRotation = this.point.rota;
        let carSpeedScale = (chapterLevel * 0.01 + 1) * (1 + 0.3 * Math.random());
        this.vx = carSpeedScale * this.point.vx;
        this.vy = carSpeedScale * this.point.vy;

        this.makeTailGusInterval = setInterval(()=>{
            Main.instance.makeTailGus(this.node);
        },120);
    },

    move() {
        // console.log("Car-move");
        // console.log(this.vx, this.vy, this.point.rota);
        this.node.rotation = this.point.rota;
        let rigidbody = this.node.getComponent(cc.RigidBody);
        rigidbody.linearVelocity = cc.v2(this.vx, this.vy);
    },

    clearTailGus(){
        console.log("Car-clearTailGus");
        clearInterval(this.makeTailGusInterval);
    },

    onToggle() {
        // console.log("Car-onToggle");
        if(this.node._isGoods) return;
        if(!this.hadOnToggole){
            this.hadOnToggole = true;
            this.node.on(cc.Node.EventType.TOUCH_START, () => {
                console.log("Car-TOUCH_START");
                let rigidbody = this.node.getComponent(cc.RigidBody);
                this.shine();
                if (this.isStoping) {
                    this.isStoping = false;
                    rigidbody.linearVelocity = cc.v2(this.vx, this.vy);
                    this.node.rotation = this.node._iniRotation;
                } else {
                    this.isStoping = true;
                    rigidbody.linearVelocity = cc.v2(0, 0);
                }
            }, this);
        }
    },

    shine() {
        this.node.theCar.color = new cc.Color(180, 180, 180);
        this.node.scale = 1.05;
        setTimeout(() => {
            this.node.scale = 1.0;
            this.node.theCar.color = new cc.Color(255, 255, 255);
        }, 100);
    },

    sendGameOverEvent() {

    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        console.log("car-onBeginContact");
        if (!Main.instance.isGameStart) return;

        let r1 = selfCollider.node.getComponent("Car").point.rota;
        let r2 = otherCollider.node.getComponent("Car").point.rota;

        if (r1 != r2) {
            AudioManager.instance.play("crash");
            selfCollider.node.getComponent("Car").shine();
            Main.instance.makeCollision(r1, r2);
            Main.instance.isGameStart = false;
            setTimeout(() => {
                Main.instance.gameOver();
            }, 2000);
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
