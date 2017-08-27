var gameTitle = function (game) {}
gameTitle.prototype = {
    create: function () {
        button = this.game.add.button(this.game.world.centerX/2,this.game.world.centerY/2,'playButton', onClickPlayGame)
        button.scale.setTo(0.5)
        button.animations.add('change',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],15,true)
        console.log(this.game.input.pointer1.isDown,this.game.input.pointer2.isDown)
        function onClickPlayGame(){
            button.animations.play('change')
            var myself = this
            setTimeout(function() {
                myself.game.state.start('TheGame')
            }, 1000)
            
        }

    }
}