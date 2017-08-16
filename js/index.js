var game = new Phaser.Game(800,600, Phaser.AUTO, '',{
    preload: preload, create: create, update: update
})

var platforms

function preload(){
		game.load.image('sky', '../img/assets/sky.png')
		game.load.image('ground','../img/assets/platform.png')
		game.load.image('star','../img/assets/star.png')
		game.load.spritesheet('dude','../img/assets/dude.png')
}


function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE)
	game.add.sprite(0,0,'sky')

	platforms = game.add.group()

	platforms.enableBody = true

	var ground = platforms.create(0, game.world.height - 64,'ground')

	ground.scale.setTo(2,2)
	ground.body.immvable = true

	var ledge = platforms.create(400,400, 'ground')
	ledge.body.immovable = true
	ledge = platforms.create(-150,250,'ground')
	ledge.body.immobable = true
	ledge = platforms.create(350,150,'ground')
	ledge.body.immobable = true


	game.add.image(0,0,'star')
}
function update(){}