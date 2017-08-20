var preload = function (game) {}

var firulais = "a"

preload.prototype = {
    preload: function(){
        this.preloadBar=this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar')
        this.load.setPreloadSprite(this.preloadBar)

        this.load.image('sky','../img/assets/sky.png')
        this.load.spritesheet('playButton','../img/ciclo/transform.png', 500 , 500)
        this.load.image('floor','../img/assets/floor1.png')
        this.load.image('star','../img/assets/star.png')
        this.load.spritesheet('player','../img/ciclo/cycle.png', 200 , 200)
    },
    create: function(){
            this.state.start('GameTitle')
    }
}