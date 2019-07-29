function preload() {
  // Load in the sprite here!
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  // Create a sprite game object here!
  this.add.sprite(40,40,'codey');
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create,
    preload
	}
}

const game = new Phaser.Game(config)

