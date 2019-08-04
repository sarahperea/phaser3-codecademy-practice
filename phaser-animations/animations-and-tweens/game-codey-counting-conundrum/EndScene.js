class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' })
  }

  preload() {
    this.load.spritesheet('happy', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Counting/codey_happy.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('sad', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Counting/codey_sad.png', { frameWidth: 300, frameHeight: 300 });
  }


  create() {
    // Calculates a score out of 100 points 
    const score = gameState.correct / (gameState.correct + gameState.incorrect) * 100;
    // Converts score to a string and adds the percentage symbol
    const percentage = Math.round(score).toString() + "%";

    if(score >= 70) {
      // Add the happy sprite and animation below:
			gameState.win = this.add.sprite(220,220,'happy');
      this.anims.create({
        key: 'celebrate',
        frames: this.anims.generateFrameNames('happy',{ start: 0, end: 1 }),
        delay: 0,
        frameRate: 2,
        repeat: -1
      });
			gameState.win.anims.play('celebrate');			
    } else {
      // Add the sad sprite and animation below:
			gameState.lose = this.add.sprite(220,220,'sad');
      this.anims.create({
        key: 'cry',
        frames: this.anims.generateFrameNames('sad',{ start: 0, end: 1 }),
        delay: 0,
        frameRate: 2,
        repeat: -1
      });
			gameState.win.anims.lose('cry');	
      
    }

    this.add.rectangle(225, 488, 450, 235, 0xFFFFFF, 0.2)

    this.add.text(30, 450, `You counted ${percentage} correctly\n      `, { fill: '#4D39E0', fontSize: '25px' })

    this.add.text(100, 520, 'Click to play again?', { fill: '#4D39E0', fontSize: '20px' })
    
    this.input.on('pointerup', () => {
      // Resets some gameState values needed to replay the game:
      gameState.numCoordinates = {}
      gameState.counter = 1
      gameState.correct = 0
      gameState.incorrect = 0

      // Add logic to transition from EndScene 
      this.scene.stop('EndScene');
      this.scene.start('GameScene');
			
    })
  }
}




