function preload() {
  // Load in the background image here!
 this.load.image('sky', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/sky.jpg')
}

function create() {
  // Put the background image in the scene here!
  this.add.image(200, 200, 'sky')
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

