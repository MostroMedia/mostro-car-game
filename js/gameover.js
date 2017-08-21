var gameOver = function (game) {}

webFontConfig = {
    active : function (){
        game.time.events.add(Phaser.Timer.SECOND, createText, this)
    },
    google: {
        families: ['Revalia']
    }
}

var text = null, grd
gameOver.prototype = {
    preload: function (){
        this.game.script('webfont','//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js')
    },
    create: function () {
        function createText(){

            text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'HOLAAAAAAA')
            text.anchor.setTo(.5)
            text.font = 'Revalia'
            text.fontSize = 60

            grd = text.context.createLinearGradient(0,0,0, text.canvas.height)
            gr.addColorStop(0,'#ff0000')
            text.fill = grd

            text.align = 'center'
            text.inputEnabled = true
            
        }
    }
}