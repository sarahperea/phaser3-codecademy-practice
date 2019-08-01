/*
 * update() has two optional parameters: time and delta.
 * The first is the number of milliseconds that your Phaser game
 * has been running, the second is the difference (in milliseconds)
 * since the last time update() was called. Phaser does its best
 * to call update() 60 times per second, so delta‘s values will
 * normally be around 16.6.
*/

let codey;

function preload() {
  this.load.image('codey','https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  codey = this.add.sprite(30, 200, 'codey')
}

// Create your update() function here
function update() {
  if (codey.x == 400) codey.x = 0;
  codey.x += 1
}

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 400,
  backgroundColor: "#5f2a55",
  scene: {
    preload,
    create,
    update
  }
}

const game = new Phaser.Game(config)

