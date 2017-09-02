var gameTitle = function (game) {}
gameTitle.prototype = {
    create: function () {
        this.button = this.game.add.button(this.game.world.centerX/2,this.game.world.centerY/2,'playButton', this.playGame,this)
        this.button.scale.setTo(0.5)
        this.button.animations.add('change',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],15,true)
    },
    playGame: function(button){
        button.animations.play('change')
        var myself = this
        setTimeout(function() {
            myself.game.state.start('TheGame')
        }, 1000)        
    }
}