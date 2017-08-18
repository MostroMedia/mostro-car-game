var theGame = function (game) {}

theGame.prototype = {
    preload: function(){
        this.time.advancedTiming = true
    },
    create: function(){
        var myFloor
        this.tileSize = 30
        this.levelSpeed = -150
        this.probCliff = 0.4
        this.probVertical = 0.4
        this.probMoreVertical = 0.5

        this.floors = this.add.group()
        this.floors.enableBody = true

        //this.add.image(0,0,'sky')

        for(var i=0; i<30; i++){
            myFloor = this.floors.create(i * this.tileSize, this.game.world.height - this.tileSize, 'floor')
            myFloor.body.immovable = true
            myFloor.body.velocity.x = this.levelSpeed
        }

        this.lastFloor = myFloor

        this.lastCliff = false
        this.lastVertical = false

        console.log(this.lastFloor)

        this.verticalObstacles = this.game.add.group();
        this.verticalObstacles.enableBody = true;
        this.verticalObstacles.createMultiple(12, 'star');
        this.verticalObstacles.setAll('checkWorldBounds', true);
        this.verticalObstacles.setAll('outOfBoundsKill', true);


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
        this.physics.arcade.collide(this.player,this.floors, this.playerDead, null, this)
        this.game.physics.arcade.collide(this.player, this.verticalObstacles, this.playerHit, null, this);


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
            if(this.player.x <= -this.tileSize){
                this.game.start('TheGame')
            }
            if(this.player.y >= this.player.world.height + this.tileSize){
                this.game.state.start('TheGame')
            }

        }
        this.moreFloor()
        
    },
    playerDead: function (player){
        if(player.body.touching.right){
            this.player.alive = false
            this.player.body.velocity.x = 0
        }
    },
    moreFloor: function(){
        var i, delta = 0, block
        
        for(i = 0; i < this.floors.length; i++) {
            
        if(this.floors.getAt(i).body.x <= -this.tileSize) {

            if(Math.random() < this.probCliff && !this.lastCliff && !this.lastVertical) {
                delta = 1;
                this.lastCliff = true
                this.lastVertical = false
            }
             else if(Math.random() < this.probVertical && !this.lastCliff) {
                this.lastCliff = false
                this.lastVertical = true
                block = this.verticalObstacles.getFirstExists(false)
                block.reset(this.lastFloor.body.x + this.tileSize, this.game.world.height - 3 * this.tileSize);
                block.body.velocity.x = this.levelSpeed
                block.body.immovable = true

            if(Math.random() < this.probMoreVertical) {
                block = this.verticalObstacles.getFirstExists(false)
                if(block) {
                block.reset(this.lastFloor.body.x + this.tileSize, this.game.world.height - 4 * this.tileSize)
                block.body.velocity.x = this.levelSpeed
                block.body.immovable = true
                }            
            } 

            }
            else {
            this.lastCliff = false;
            this.lastVertical = false;
            }
            this.floors.getAt(i).body.x = this.lastFloor.body.x + this.tileSize + delta * this.tileSize * 1
            this.lastFloor = this.floors.getAt(i)
            break;
        }
        }
    },
    initGameController: function(){
    
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
            this.player.body.velocity.y -= 300 
        }     
    },
    render: function(){
        // this.game.debug.cameraInfo(game.camera, 32, 32);
        // this.game.debug.spriteCoords(player, 32, 500);
    }
}