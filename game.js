class Parkour extends Phaser.Scene
{

    create ()
    {
       this.add.text(0, 0, 'Hello World', { font: '"Press Start 2P"' });

    }
}

new Phaser.Game({
    type: Phaser.AUTO, // automatically detect browser WebGL support
    width: window.innerWidth -1 , // canvas width
    height: window.innerHeight - 1, // canvas height
    backgroundColor: '#dbfff3', // canvas background color
    parent: 'phaser-example', // parent DOM element
    scene: Parkour,
});
