new Phaser.Game({
  scene: {
    create: function () {
      this.add.text(0, 0, 'Hello world');
    }
  }
});
const config = {
    type: Phaser.AUTO, // automatically detect browser WebGL support
    width: window.innerWidth, // canvas width
    height: window.innerHeight, // canvas height
    backgroundColor: '#dbfff3', // canvas background color
    parent: 'phaser-example', // parent DOM element
    scene: Example // 
};
