let gameState = {};

function create() {
  // Create a circle and assign it to gameState.circle here
  gameState.circle = this.add.circle(200,200,50,0xFFF070);
}

function update() {
  gameState.circle.y += 1
}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 600,
  backgroundColor: "#99ff99",
  scene: {
    create,
    update
  }
}

const game = new Phaser.Game(config)

