class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.Kobe = new Kobe(this);
    this.BarOfShooting = new BarOfShooting(this);
    this.Court = new Court(this);
    this.ball = new Ball(this);
    this.shot = false;
    this.setControlBindings();
  }
  setControlBindings() {
    const $buttonStart = document.getElementById('btn-start');
    const $buttonShoot = document.getElementById('btn-shoot');

    $buttonShoot.addEventListener('click', () => {
      this.shoot();
    });
  }

  shoot() {
    this.isRunning = !this.isRunning;
    this.context.clearRect(300, 230, 63, 62);
    this.Court.drawCourt();
    this.Kobe.drawKobe(2);
    this.shot = true;
    const drawNewImage = () => {
      this.context.clearRect(300, 230, 63, 62);
      this.Court.drawCourt();
      this.Kobe.drawKobe(3);

      this.ball.drawBall();
    };
    const newImage = setTimeout(drawNewImage, 200);
  }
  startGame() {
    this.Court.drawCourt();
    this.paint();
    this.isRunning = true;
    this.Kobe.drawKobe(1);
    this.loop();
  }

  paint() {
    context.clearRect(98, 438, 705, 55);
    this.BarOfShooting.paint();
    this.BarOfShooting.shootingBar();
    this.BarOfShooting.marginShootingBar();
    this.BarOfShooting.shootingInterval();
    this.BarOfShooting.drawLine();
    //this.ball.drawBall()
  }

  loop(timestamp) {
    this.paint();
    this.BarOfShooting.moveLine(timestamp);
    this.ball.ballMoving();
    this.ball.drawBall;
    if (this.isRunning) {
      window.requestAnimationFrame(timestamp => {
        this.loop(timestamp);
      });
    }
  }
}
