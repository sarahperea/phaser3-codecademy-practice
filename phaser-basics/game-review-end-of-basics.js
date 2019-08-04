let gameState = {};

function preload () {
  this.load.image('codey', 
'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create () {
  gameState.codey = this.add.sprite(100,100,'codey');
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update () {
  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 1;
  }
}

const config = {
  width: 450,
  height: 600,
  backgroundColor: '0xdda0dd',
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);
