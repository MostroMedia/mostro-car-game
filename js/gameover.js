var gameOver = function (game) {}

gameOver.prototype = {
    create: function () {
        
        this.game.add.image(this.game.world.centerX/2.5,this.game.world.centerY/2,'gameOverTitle')
        var results = this.game.add.text(this.game.world.centerX,(this.game.world.centerY/2) + 200, 'Tu puntaje es ' + localStorage.getItem('highScore'), { fontSize: '15px', fill: '#fff' } )
        results.anchor.set(0.5)

        // var myself = this
        // setTimeout(function() {
        //     myself.game.state.start('TheGame')
        // }, 2000)
            
    },
    update: function(){

    }
}