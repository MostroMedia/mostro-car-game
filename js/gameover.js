var gameOver = function (game) {}

gameOver.prototype = {
    create: function () {
        
        this.game.add.image((this.game.world.centerX/4) ,this.game.world.centerY/2,'gameOverTitle')

        var results = this.game.add.text(this.game.world.centerX/1.5,(this.game.world.centerY/2) + 150, 'Tu puntaje es ' + localStorage.getItem('highScore'), { fontSize: '15px', fill: '#fff', boundsAlignH: "center", boundsAlignV: "middle" } )
        
        this.button = this.game.add.button(this.game.world.centerX/2.25,this.game.world.centerY + 50 ,'startAgain', this.playGame,this)
        this.button.scale.setTo(0.5)
        this.button.onInputOver.add(this.onHover,this)
        this.button.onInputOut.add(this.onOut,this)
            
    },
    playGame: function(){
        this.game.state.start('TheGame')
    },
    onHover: function(button){
        button.loadTexture('startAgainHover')
    },
    onOut: function(button){
        button.loadTexture('startAgain')
    }
}