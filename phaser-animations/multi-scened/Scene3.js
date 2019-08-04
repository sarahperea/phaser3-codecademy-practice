class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene3' })
  }

  create() {
    this.add.text(110, 150, 'This is the third Scene!', {fill: '#000000', fontSize: '20px'})

    this.input.on('pointerdown', () => {
    this.scene.stop('Scene3')
      this.scene.start('Scene1')
    })
  }
}
