let UserDataManager = require("UserDataManager"),
    UserData = UserDataManager.getUserData();

cc.Class({
    extends: cc.Component,

    properties: {
        Car: cc.Prefab,

    },

    onLoad() {
        console.log("main-onload");
        cc.director.getPhysicsManager().enabled = true;
        this.setGravity(0);
        this.car1 = this.createCar(200, 200);
        this.car2 = this.createCar(0, 0);
        this.moveCar(this.car1, 200, -50, -50);
        this.moveCar(this.car2, 20, 100, 100);
    },

    createCar(x, y) {
        let carLevel = Math.floor(Math.random() * UserData.carLevel);
        let car = cc.instantiate(this.Car);
        car.x = x, car.y = y;

        let carChild = car.getChildByName("car_" + carLevel);
        carChild.active = true;
        // let physicsPolygonCollider = car.getComponent(cc.PhysicsPolygonCollider);

        let rigidbody = car.getComponent(cc.RigidBody);
        rigidbody.enabledContactListener = true;
        this.node.addChild(car);
        return car;
    },

    moveCar(car, rotation, vx, vy) {
        car.rotation = rotation;
        let rigidbody = car.getComponent(cc.RigidBody);
        rigidbody.linearVelocity = cc.p(vx, vy);
    },

    setGravity(g) {
        cc.director.getPhysicsManager().gravity = cc.p(0, -32 * g);
    },


    start() {

    },

    // update (dt) {},
});
