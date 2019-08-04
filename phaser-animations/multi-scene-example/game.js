const gameState = {
  score: 0
};

const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 600,
  backgroundColor: "b9eaff",
  scene: [Scene1, Scene2, Scene3]
};

const game = new Phaser.Game(config);

