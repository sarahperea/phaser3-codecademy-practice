let game;
let platforms;  // a group of platform objects the player will jump on
let player; // the actual player controlled sprite
let cursors;
let platformCount = 0;
let emitter;
let particles;
let gameOptions = {
  width: 480,
  height: 640,
  gravity: 800
}

class JumpScene extends Phaser.Scene {
  constructor() {
    super({ key: 'JumpScene' })
  }

  preload(){
    this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Codey+Jump/platform.png');
    this.load.image('stripe', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Codey+Jump/stripe.png');
    this.load.spritesheet("codey", "https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Codey+Jump/codey.png", {
      frameWidth: 72,
      frameHeight: 90
    });
  }

  create() {
    particles = this.add.particles('stripe');
    const graphics = this.add.graphics();
    graphics.fillGradientStyle(0xdadaff, 0x6cfafa, 0xfccaff, 0xdadaff, 1);
    graphics.fillRect(0, 0, gameOptions.width, gameOptions.height);
    
    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('codey', { start: 2, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.physics.world.setBounds(0, 0, 480, 640);
    platforms = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });

    for (let i = 0; i < 8; i++) {
      let randomX = Math.floor(Math.random() * 400) + 24;
      platforms.create(randomX, i * 80, 'platform').setScale(.5);
    }

    player = this.physics.add.sprite(100, 450, 'codey').setScale(.5);
    player.setBounce(1);
    player.setCollideWorldBounds(true);
    player.body.checkCollision.up = false;
    player.body.checkCollision.left = false;
    player.body.checkCollision.right = false;

    //In order for our platforms to interact with the player we add a collider  
    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();
  }

  update(){
    player.anims.play('jump', true);
    
    if (cursors.left.isDown)
    {
      player.setVelocityX(-240); // we want to apply a negative x velocity to go left on the screen
      player.flipX = true;
    }
    else if (cursors.right.isDown)
    {
      player.setVelocityX(240); // we want to apply a positive x velocity to go right on the screen
      player.flipX = false;
    }
    else
    {   
      //if we don't include this then the player will always be going right or left instead of a L/R neutral upwards direction
      player.setVelocityX(0);
    }

    if (player.body.touching.down) {
      player.setVelocityY(-500);
    }


    // We want to the platforms to move downwards and create an effect of progressing upwards
    // This can be done by moving the camera but can also be done by moving the world around the player
    if (player.body.y <  gameOptions.height/2) {
      platforms.children.iterate(updateY, this);
    }
    
    if (player.body.touching.down) {
      this.cameras.main.shake();
    }
    
    if (platformCount > 10 && !emitter) {
      particles.createEmitter({
        x: { min: 0, max: gameOptions.width },
        y: gameOptions.height + 10,
        lifespan: 2500,
        speedY: { min: -300, max: -500 },
        scale: .5,
        quantity: 5,
        blendMode: 'ADD'
      });
    }
  }
}

let config = {
  type: Phaser.AUTO,
  width: gameOptions.width,
  height: gameOptions.height,
  backgroundColor: '#4599ff',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: gameOptions.gravity },
    }
  },
  scene: JumpScene,
};

game = new Phaser.Game(config);


// With this function, we move the platforms lower until they're off screen and then we reposition
// them above the screen to create an endless effect.
function updateY(platform){
  let delta = Math.floor(gameOptions.height/2) - player.y;  // we want to keep the player somewhere in the center of the screen so we'll measure the difference from the center y

  if(delta > 0){ 
    platform.y += delta/30; //the delta may be too large so I'll make it smaller by dividing it by 30
  }

  if(platform.y > 640){
    platform.y = -platform.height;
    platform.x = Math.floor(Math.random() * 400) + 24;
    platformCount += 1;
  }
}
