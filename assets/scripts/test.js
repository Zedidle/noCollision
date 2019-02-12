cc.Class({
    extends: cc.Component,

    properties: {
        car1:cc.Node,
        car2:cc.Node,
    },

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        this.setGravity(10);
        this.onTest();
        let rigidbody = this.car1.getComponent(cc.RigidBody);
        rigidbody.enabledContactListener = true;
        console.log(rigidbody)
    },

    setGravity(g){
        cc.director.getPhysicsManager().gravity = cc.p(0,-32 * g);
    },

    
    onTest(){
        this.node.on(cc.Node.EventType.TOUCH_START,()=>{
            let rigidbody = this.car1.getComponent(cc.RigidBody);
            let ranX = Math.random() * 300 - 150;
            let ranY = Math.random() * 300;
            rigidbody.linearVelocity = cc.p(ranX,ranY);
        },this);
    },


    start () {

    },
    // update (dt) {},



});
