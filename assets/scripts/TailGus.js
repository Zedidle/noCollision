
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onEnable() {
        let r = Math.random();
        let t = 1.5;
        this.node.scale = 0.8;
        this.node.opacity = 255;
        if (r < 0.5) {
            this.node.runAction(cc.scaleTo(t, 0));
        } else {
            this.node.runAction(
                cc.spawn(
                    cc.scaleTo(t, 2),
                    cc.fadeTo(t, 0)
                ));
        }

    },

    onLoad() {

    },

    start() {

    },

    // update (dt) {},
});
