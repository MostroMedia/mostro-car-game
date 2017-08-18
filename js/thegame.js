var theGame = function (game) {}

theGame.prototype = {
    preload: function(){
        this.time.advancedTiming = true
    },
    create: function(){
        var myFloor
        this.tileSize = 30
        this.levelSpeed = -150

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

        this.initGameController()

        this.game.camera.follow(this.player)
    },
    update: function(){
        this.physics.arcade.collide(this.player,this.floors, this.playerHit, null, this)

        if(this.player.alive){
            if(this.player.body.touching.down){
                this.player.body.velocity.x = -this.levelSpeed
                this.player.animations.play('right')  
            }else{
                this.player.body.velocity.x = 0
            }
            if(this.cursors.up.isDown){
                this.playerJump()
            }
        }
        
    },
    playerHit: function (){

    },
    initGameController: function(){
        console.log(GameController.hasInitiated)
        if(!GameController.hasInitiated){
            var self = this
            GameController.init({
                right: {
                    type: 'none', 
                },
                left:{
                    type: 'buttons',
                    buttons: [
                        false,
                        {
                            label: 'A',
                            touchStart: function(){
                                if(!self.player.alive){
                                    return
                                }
                                self.playerJump()
                            }
                        }
                    ]
                    
                }
            })
            GameController.hasInitiated = true
        }
    },
    playerJump: function(){
        if(this.player.body.touching.down){
            this.player.body.velocity.y -= 200 
        }     
    },
    render: function(){
        // this.game.debug.cameraInfo(game.camera, 32, 32);
        // this.game.debug.spriteCoords(player, 32, 500);
    }
}