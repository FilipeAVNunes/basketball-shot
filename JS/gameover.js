class Gameover {
  constructor(game) {
    this.game = game;
    this.gameover = new Image();
    this.gameover.src = '/IMAGES/deflatedBall.png';
  }

  drawGameover() {
    const canvasWidth = this.game.canvas.width;
    const canvasHeight = this.game.canvas.height;
    

    this.game.context.drawImage(gameover, 0, 0, canvasWidth, canvasHeight);
  }
}
