var boot = function (game) {}

boot.prototype = {
    preload: function(){
        this.load.image('preloadbar','../img/fav-icon-mostro.png')
    },
    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.pageAlignHorizontally = true
        this.scale.hasPhaserSetFullScreen = true
        this.state.start("Preload")
    }
}

// Ref http://www.emanueleferonato.com/2014/08/28/phaser-tutorial-understanding-phaser-states/