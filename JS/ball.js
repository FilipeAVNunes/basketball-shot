class Ball {
  constructor(game) {
    this.game = game;
  }

  drawBall() {
    const ballUrl = '/IMAGES/Bola.png';

    const ball = new Image();
    ball.src = ballUrl;

    ball.addEventListener('load', () => {
      this.game.context.drawImage(ball, 350, 190);
    });
  }

  ballMoving() {}

  paint() {
    const context = this.game.context;
    context.save();
    context.restore();
  }
}
