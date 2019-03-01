let AudioManager = require("AudioManager");
let Main = require("Main");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        console.log("CashLine-onLoad");
    },

    collisionExplosion(carLevel) {
        console.log("CashLine-collisionExplosion");
        AudioManager.instance.play("explosion");

        let cashLineLongContent = this.node;
        let money = cashLineLongContent.parent.getChildByName("money");
        money.active = true;
        money.getComponent(cc.Label).string = "$" + (carLevel + 1) * 20;
        console.log(money.zIndex);
        money.zIndex = 1000;

        let down1 = cc.moveTo(0.4, 0, 0);
        let down2 = cc.moveTo(0.1, 0, 0);
        let down3 = cc.moveTo(0.03, 0, 0);
        let up1 = cc.moveTo(0.1, 0, 25);
        let up2 = cc.moveTo(0.03, 0, 5);
        down1.easing(cc.easeIn(3.0));
        down2.easing(cc.easeIn(3.0));
        down3.easing(cc.easeIn(3.0));
        up1.easing(cc.easeOut(3.0));
        up2.easing(cc.easeOut(3.0));
        money.runAction(cc.sequence(
            down1, up1, down2, up2, down3,
            cc.callFunc(() => {
                money.y = 100;
                money.active = false;
            })
        ));

        let cashLineLong = cashLineLongContent.getChildByName("cashLineLong");
        cashLineLong.opacity = 0;
        cashLineLong.runAction(cc.sequence(
            cc.spawn(
                cc.fadeTo(0.15, 255),
                cc.scaleTo(0.15, 1.05),
            ),
            cc.spawn(
                cc.fadeTo(0.3, 0),
                cc.scaleTo(0.15, 1),
            )
        ));
    },

    start() {

    },

    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter: function (other, self) {
        let de = self.node.rotation - other.node.rotation;
        if (85 < de && de < 95) {
            this.collisionExplosion(other.node.carLevel);
            setTimeout(() => {
                if (other.node) {
                    Main.instance.carPool.put(other.node);
                }
            }, 5000);
        }
    },

    // update (dt) {},
});
