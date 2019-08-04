class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' })
  }

  create() {
    this.add.text(95, 250, 'Click to Start!', { fontSize: '30px', fill: '#000000' });
    this.input.on('pointerdown', () => {
      this.scene.stop('StarScene')
      this.scene.start('GameScene')
    })
  }
}


