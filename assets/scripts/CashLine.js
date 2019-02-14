let AudioManager = require("AudioManager");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        console.log("CashLine-onLoad");
        // this.node.on(cc.Node.EventType.TOUCH_START, () => {
        //     this.collisionExplosion();
        // }, this);
    },

    collisionExplosion() {
        console.log("CashLine-collisionExplosion");
        AudioManager.instance.play("explosion");

        let level = Math.ceil(Math.random() * 43);
        let cashLineLongContent = this.node;
        let money = cashLineLongContent.parent.getChildByName("money");
        money.active = true;
        money.getComponent(cc.Label).string = "$" + level*20;
        console.log(money.zIndex);
        money.zIndex = 1000;

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

        let cashLineLong = cashLineLongContent.getChildByName("cashLineLong");
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

    },

    start () {

    },
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        this.collisionExplosion();
        // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
        var world = self.world;

        // 碰撞组件的 aabb 碰撞框
        var aabb = world.aabb;

        // 节点碰撞前上一帧 aabb 碰撞框的位置
        var preAabb = world.preAabb;

        // 碰撞框的世界矩阵
        var t = world.transform;

        // 以下属性为圆形碰撞组件特有属性
        var r = world.radius;
        var p = world.position;

        // 以下属性为 矩形 和 多边形 碰撞组件特有属性
        var ps = world.points;
    },
    // update (dt) {},
});
