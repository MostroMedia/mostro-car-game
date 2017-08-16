var preload = function (game) {
    console.log("hola from preload")
}
preload.prototype = {
    preload: function(){
        this.game.load.image('sky','../img/assets/sky.png')
        this.game.load.image('star','../img/assets/star.png')
    },
    create: function(){
        this.game.add.image(0,0,'sky') 
        this.game.add.sprite(0,0,'star')     
    }
}