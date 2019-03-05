
let AudioManager = require("AudioManager");

cc.Class({
    extends: cc.Component,

    properties: {
        noteIcon: cc.Node,
    },


    onLoad () {},

    start () {

    },

    toggleAudio(){
        if(AudioManager.instance.canPlayAudio){
            this.noteIcon.opacity = 180;
        }else{
            this.noteIcon.opacity = 255;
        }
        AudioManager.instance.toggle();
    },

    // update (dt) {},
});
