var boot = function (game) {
    console.log("hola from boot")
}

boot.prototype = {
    preload: function(){
    },
    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.hasPhaserSetFullScreen = true
        console.log(this.scale)
        this.game.state.start("Preload")
    }
}

// Ref http://www.emanueleferonato.com/2014/08/28/phaser-tutorial-understanding-phaser-states/