var theGame = function (game) {}

theGame.prototype = {
    preload: function(){
        this.time.advancedTiming = true
    },
    create: function(){
        var myFloor
        this.tileSize = 30
        this.levelSpeed = -100

        this.floors = this.add.group()
        this.floors.enableBody = true

        //this.add.image(0,0,'sky')

        for(var i=0; i<120; i++){
            myFloor = this.floors.create(i * this.tileSize, this.game.world.height - this.tileSize, 'floor')
            myFloor.body.immovable = true
            myFloor.body.velocity.x = this.levelSpeed
        }

        this.player = this.game.add.sprite(250,320, 'player')
        this.game.physics.arcade.enable(this.player)
        this.player.body.gravity.y = 300

        this.player.animations.add('left',[0,1,2,3],10,true)
        this.player.animations.add('right',[5,6,7,8],10,true)

        this.cursors = this.game.input.keyboard.createCursorKeys()

        this.game.camera.follow(this.player)
    },
    update: function(){
        this.physics.arcade.collide(this.player,this.floors)

        this.player.body.velocity.x = 0

        if(this.cursors.right.isDown){
            this.player.body.velocity.x = 150
            this.player.animations.play('right')

        }else if(this.cursors.left.isDown){
            this.player.body.velocity.x = -150
            this.player.animations.play('left')
        }else{
            this.player.animations.stop()
            this.player.frame = 4
        }

        if(this.cursors.isDown && this.player.touching.down){
            this.player.velocity.y = -350
        }
    }
}