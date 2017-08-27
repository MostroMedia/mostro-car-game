var gameOver = function (game) {}

gameOver.prototype = {
    create: function () {
        console.log(localStorage.getItem('highScore'))
        this.game.add.image(this.game.world.centerX/2,this.game.world.centerY/2,'gameOverTitle')
        
        var mbutton = this.game.add.button(0,400,'startAgain', onClickPlayAgain,this)
        mbutton.scale.setTo(0.2)


        function onClickPlayAgain(){
            console.log("Hola")
            this.game.state.start("TheGame")
        }
    },
    update: function(){

    }
}