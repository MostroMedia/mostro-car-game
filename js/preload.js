var preload = function (game) {}

preload.prototype = {
    preload: function(){
        this.preloadBar=this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5)
        this.load.setPreloadSprite(this.preloadBar)

        this.load.image('sky','../img/assets/sky.png')
        this.load.image('playButton', '../img/assets/start-button.png')
        this.load.image('floor','../img/assets/platform.png')
        this.load.spritesheet('player','../img/assets/dude.png', 32 , 48)
    },
    create: function(){
        var mySelf = this
        setTimeout(function() {
            mySelf.state.start('GameTitle')
        }, 1000);
    }
}