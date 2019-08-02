function preload() {
  this.load.image('bug1', 
'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_1.png');
  this.load.image('bug2', 
'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_2.png');
  this.load.image('bug3', 
'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bug_3.png');
  this.load.image('platform', 
'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/platform.png');
  this.load.image('codey', 
'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/codey.png');
  this.load.image('bugPellet', 
'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bugPellet.png');
  this.load.image('bugRepellent', 
'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Bug+Invaders/bugRepellent.png');
}

// Helper Methods below:
// sortedEnemies() returns an array of enemy sprites sorted by their x 
coordinate
function sortedEnemies(){
  const orderedByXCoord = gameState.enemies.getChildren().sort((a, b) => 
a.x - b.x);
  return orderedByXCoord;
}
// numOfTotalEnemies() returns the number of total enemies 
function numOfTotalEnemies() {
	const totalEnemies = gameState.enemies.getChildren().length;
  return totalEnemies;
}

const gameState = {};

function create() {
	// When gameState.active is true, the game is being played and 
not over. When gameState.active is false, then it's game over
	gameState.active = true;

	// When gameState.active is false, the game will listen for a 
pointerup event and restart when the event happens
	this.input.on('pointerup', () => {
		if (gameState.active === false) {
			this.scene.restart();
		}
	})

	// Creating static platforms
	const platforms = this.physics.add.staticGroup();
	platforms.create(225, 490, 'platform').setScale(1, 
.3).refreshBody();

	// Displays the initial number of bugs, this value is initially 
hardcoded as 24 
	gameState.scoreText = this.add.text(175, 482, 'Bugs Left: 24', { 
fontSize: '15px', fill: '#000000' });

	// Uses the physics plugin to create Codey
	gameState.player = this.physics.add.sprite(225, 450, 
'codey').setScale(.5);

	// Create Collider objects
	gameState.player.setCollideWorldBounds(true);
	this.physics.add.collider(gameState.player, platforms);
	
	// Creates cursor objects to be used in update()
	gameState.cursors = this.input.keyboard.createCursorKeys();

	// Add new code below:
	
}

function update() {
	if (gameState.active) {
		// If the game is active, then players can control Codey
		if (gameState.cursors.left.isDown) {
			gameState.player.setVelocityX(-160);
		} else if (gameState.cursors.right.isDown) {
			gameState.player.setVelocityX(160);
		} else {
			gameState.player.setVelocityX(0);
		}

		// Execute code if the spacebar key is pressed
		if 
(Phaser.Input.Keyboard.JustDown(gameState.cursors.space)) {
			
		}

		// Add logic for winning condition and enemy movements 
below:
    
  }
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 500,
	backgroundColor: "b9eaff",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			enableBody: true,
		}
	},
	scene: {
		preload,
		create,
		update
	}
};


const game = new Phaser.Game(config);
