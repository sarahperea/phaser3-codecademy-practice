class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: 'Scene2' })
  }

  create() {
    this.add.text(110, 150, 'This is the second Scene!', {fill: '#000000', fontSize: '20px'})

    this.input.on('pointerdown', () => {
    this.scene.stop('Scene2')
      this.scene.start('Scene3')
    })
  }
}
