const AudioManager = cc.Class({
    extends: cc.Component,

    properties: {
        bgm: {
            type: cc.AudioClip,
            default: null,
        },
        coin_drop: {
            type: cc.AudioClip,
            default: null,
        },
        crash: {
            type: cc.AudioClip,
            default: null,
        },
        explosion: {
            type: cc.AudioClip,
            default: null,
        }
    },

    statics: {
        instance: null,
    },
    ctor() {
        if (!AudioManager.instance) {
            AudioManager.instance = this;
            cc.game.addPersistRootNode(this.node);
            this.canPlayAudio = true;
        }
    },
    onLoad() {
        console.log("AudioManager-onLoad");
        AudioManager.instance.play("bgm", true);
    },

    start() {

    },

    play(audio, loop, volume) {
        if (!this.canPlayAudio) return;
        let _loop = loop ? loop : false;
        let _volume = volume ? volume : 1;
        cc.audioEngine.play(this[audio], _loop, _volume);
    },

    update(dt) { },
});
