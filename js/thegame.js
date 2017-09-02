var theGame = function (game) {
    button= 0;
}

var myFloor

theGame.prototype = {
    preload: function(){
        this.time.advancedTiming = true
    },
    create: function(){
        
        this.tileSize = 30
        this.levelSpeed = -150
        this.aprxDistance = 0.4
        this.preObstacle = 0.4
        this.posObstacle = 0.5
        this.score = 0

        this.floors = this.add.group()
        this.floors.enableBody = true

        for(var i=0; i<30; i++){
            myFloor = this.floors.create(i * this.tileSize, this.game.world.height - this.tileSize, 'floor')
            myFloor.body.immovable = true
            myFloor.body.velocity.x = this.levelSpeed
        }

        this.lastFloor = myFloor

        this.lastObstacle = false
        this.lastDistance = false

        this.myObstacles = this.game.add.group()
        this.myObstacles.enableBody = true
        this.myObstacles.createMultiple(150, 'alien')
        this.myObstacles.setAll('alien', true)
        this.myObstacles.setAll('alien', true)

        this.player = this.game.add.sprite(230,310, 'player')
        this.game.physics.arcade.enable(this.player)
        this.player.body.gravity.y = 300
        this.player.scale.setTo(0.4)

        this.player.animations.add('left',[0,1],10,true)
        this.player.animations.add('right',[3,4],10,true)

        this.cursors = this.game.input.keyboard.createCursorKeys()

        this.game.camera.follow(this.player)

        this.scoreText = this.game.add.text(16,16, 'Puntaje 0', { fontSize: '15px', fill: '#fff' } )

    },
    update: function(){
        this.physics.arcade.collide(this.player,this.floors, this.playerDead, null, this)
        this.physics.arcade.collide(this.player,this.myObstacles,this.playerDead,null,this)
        
        if(this.player.alive){
            this.score += 1
            localStorage.setItem('highScore', this.score)
            this.scoreText.text = 'Puntaje ' + localStorage.getItem('highScore')           
            if(this.player.body.touching.down){
                this.player.body.velocity.x = -this.levelSpeed
                this.player.animations.play('right')
            }else{
                this.player.body.velocity.x = 0
            }
            if(this.cursors.up.isDown || this.game.input.pointer1.isDown){
                this.playerJump()
            }
        }
        this.moreFloor()
        
    },
    actionOnClick: function(){
        console.log("Hi")
    },
    playerDead: function (player){
        if(player.body.touching.right){
            this.player.alive = false
            this.player.animations.stop()
            this.player.body.velocity.x = 0
            this.player.loadTexture('dead')
            this.game.time.events.add(1000, this.goToGameOver, this)
        }
    },
    goToGameOver: function(){
        this.game.state.start("GameOver")
    },
    moreFloor: function(){
        var i, delta = 0, obstacle
        
        for(i = 0; i < this.floors.length; i++) {
            
        if(this.floors.getAt(i).body.x <= -this.tileSize) {

            if(Math.random() < this.aprxDistance && !this.lastDistance && !this.lastObstacle){
                delta = 1
                this.lastDistance = true
                this.lastObstacle = false

            }else if(Math.random() < this.preObstacle && !this.lastDistance){
                this.lastDistance = false
                this.lastObstacle = true

                if(obstacle){
                    obstacle = this.myObstacles.getFirstExists(false)
                    obstacle.reset(this.lastFloor.body.x + this.tileSize,this.game.world.height - 6 * this.tileSize)
                    obstacle.body.velocity.x = this.levelSpeed
                    obstacle.body.immovable = true
                }
                
                if(Math.random() < this.posObstacle){
                    obstacle = this.myObstacles.getFirstExists(false)

                    if(obstacle){
                        obstacle.reset(this.lastFloor.body.x + this.tileSize,this.game.world.height - 3 * this.tileSize)
                        obstacle.body.velocity.x = this.levelSpeed
                        obstacle.body.immovable = true
                    }
                }
            }else{
                this.lastObstacle = false
                this.lastDistance = false
            }

            this.floors.getAt(i).body.x = this.lastFloor.body.x + this.tileSize + delta * this.tileSize * 1
            this.lastFloor = this.floors.getAt(i)
            break
        }
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