var gameOver = function (game) {}

gameOver.prototype = {
    create: function () {
        
        this.game.add.image(this.game.world.centerX/2.5,this.game.world.centerY/2,'gameOverTitle')
        var results = this.game.add.text(this.game.world.centerX,(this.game.world.centerY/2) + 200, 'Tu puntaje es ' + localStorage.getItem('highScore'), { fontSize: '15px', fill: '#fff' } )
        results.anchor.set(0.5)

        this.button = this.game.add.button((this.game.world.centerX/2) + 100,this.game.world.centerY ,'startAgain', this.playGame,this)
        this.button.scale.setTo(0.2)
            
    },
    playGame: function(){
        this.game.state.start('TheGame')
    }
}