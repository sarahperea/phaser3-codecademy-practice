// gameState will keep track of how many correct and incorrect guesses there are
// The counter property keeps track of what number is being guessed 
// The numCoordinates property is used in the helper functions to make sure no coordinates repeat 
const gameState = {
  counter: 1,
  correct: 0,
  incorrect: 0,
  numCoordinates: {},
};

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 600,
  backgroundColor: 'F8B392',
  scene: [StartScene, GameScene, EndScene]
};

const game = new Phaser.Game(config);

