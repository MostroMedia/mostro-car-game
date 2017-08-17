var gameTitle = function (game) {}
gameTitle.prototype = {
    create: function () {
        this.game.add.image(0,0,'sky')
        button = this.game.add.button(this.game.world.centerX/2,this.game.world.centerY /2,'playButton', onClickPlayGame)
        button.scale.setTo(1,1)
        
        // var text = "Press Play"
        // var style = { font: "30px Georgia", fill: "#ccc", align: "center"}
        // var myText = this.game.text(this.game.width / 2 , this.game.height / 2 + 180, text, style)
        // myText.set(0.5)

        function onClickPlayGame(){
            this.game.state.start('TheGame')
        }

    }
}