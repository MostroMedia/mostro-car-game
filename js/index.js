var game = new Phaser.Game(800,600, Phaser.AUTO, '',{
    preload: preload, create: create, update: update
})

function preload(){
		game.load.image('sky', '../img/assets/sky.png')
		game.load.image('ground','../img/assets/platform.png')
		game.load.image('star','../img/assets/star.png')
		game.load.spritesheet('dude','../img/assets/dude.png')
}
function create(){
		game.add.sprite(0,0,'sky')
		game.add.image(0,0,'star')
}
function update(){}