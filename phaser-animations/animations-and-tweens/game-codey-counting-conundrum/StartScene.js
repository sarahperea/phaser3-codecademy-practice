class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  preload() {
    this.load.spritesheet('searching', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Counting/codey_searching.png', { frameWidth: 300, frameHeight: 300 });
  }

  create() {
    // Creates the text on the start screen:
    this.add.text(10, 50, "Codey's Counting \n    Conundrum" , { fill: '#4D39E0', fontSize: '45px' });
    this.add.text(130, 520, ' Ready Count?\nClick to start!', { fill: '#4D39E0', fontSize: '20px' });

    // Create the sprite object, animation, and play the animation: 
		gameState.startSprite = this.add.sprite(220,320,'searching');	
			
    this.anims.create({
      key: 'codeySearch',
      frames: this.anims.generateFrameNames('searching', {start: 0, end: 5}),
      delay: 0,
      frameRate: 2,
      repeat: -1
    });
    
    gameState.startSprite.anims.play('codeySearch');
			
    this.input.on('pointerup', () => {
      // Add logic to transition from StartScene to GameScene:
      this.scene.stop('StartScene');
      this.scene.start('GameScene');
    });


  }
}


