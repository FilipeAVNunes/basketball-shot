class Ball {
  constructor(game) {
    this.game = game;
    this.x = 280;
    this.y = 280;
    this.momentum = 1;
    this.xSpeed = 5;
    this.ySpeed = -5;
    this.yAcceleration = 0.2;
    this.radius = 41;
  }

  drawBall() {
    this.game.context.clearRect(0, 0, 1000, 1000);
    //this.game.drawCourt();
    const ballUrl = '/IMAGES/Bola.png';

    const ball = new Image();
    ball.src = ballUrl;

    ball.addEventListener('load', () => {
      this.game.context.drawImage(ball, this.x, this.y);
    });
    this.game.context.drawImage(ball, this.x, this.y);
  }

  ballMoving() {
    const newYPosition = this.y + this.ySpeed;
    const newXPosition = this.x + this.xSpeed;

    if (newYPosition > 185 - this.radius - 1) {
      if (this.ySpeed >= 0) {
        this.ySpeed = Math.abs(this.ySpeed) * -1 * this.momentum;
      }
    }
    if (newXPosition < this.radius || newXPosition > this.game.context.canvas.width - this.radius) {
      this.xSpeed *= -1;
    }
    this.ySpeed += this.yAcceleration;
    this.y += this.ySpeed;
    this.x += this.xSpeed;
  }

  ballLoop(timestamp) {
    if (this.game.shot) {
      this.ballMoving();
    }
    if (this.game.isRunning) {
      window.requestAnimationFrame(timestamp => {
        this.ballLoop(timestamp);
      });
    }
  }
}

/*
  paint() {
    const context = this.game.context;
    context.save();
    context.restore();
  }
}
*/
