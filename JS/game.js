class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.Kobe = new Kobe(this);
    this.BarOfShooting = new BarOfShooting(this);
    this.Court = new Court(this);
    this.ball = new Ball(this);
    this.scoreboard = new Scoreboard(this);
    this.shot = false;
    this.score = 0;
    this.setControlBindings();
  }
  setControlBindings() {
    const $buttonStart = document.getElementById('btn-start');
    const $buttonShoot = document.getElementById('btn-shoot');
    const $buttonRestart = document.getElementById('btn-restart');

    $buttonShoot.addEventListener('click', () => {
      this.shoot();
    });

    $buttonRestart.addEventListener('click', () => {
      this.restartGame();
    });
  }

  shoot() {
    //HERE WE NEED THE IF STATMENTS TO SEE WHAT FUNCTION OF THE BALL TO RUN
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
      //understand the position of the bar to run one of the three functions
      if (this.BarOfShooting.posx >= 99 && this.BarOfShooting.posx < 400) {
        this.ball.ballMissedShort();
      } else if (this.BarOfShooting.posx > 490 && this.BarOfShooting.posx <= 855) {
        this.ball.ballMissedLong();
      } else {
        this.ball.ballScore();
      }
    };
    const newImage = setTimeout(drawNewImage, 300);
  }
  startGame() {
    this.Court.drawCourt();
    this.paint();
    this.Kobe.drawKobe(1);
    if (!this.isRunning) {
      this.isRunning = true;
      this.loop();
    }
  }

  restartGame() {
    this.BarOfShooting.speed = 5;
    this.Kobe = new Kobe(this);
    this.BarOfShooting = new BarOfShooting(this);
    this.Court = new Court(this);
    this.ball = new Ball(this);
    this.Scoreboard = new Scoreboard(this);
    this.isRunning = true;
    this.scoreboard.score = 0;
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
    console.log('game is running', this.scoreboard.score);
    this.paint();
    this.BarOfShooting.moveLine(timestamp);
    this.ball.drawBall;
    this.scoreboard.scoringMachine();
    if (this.isRunning) {
      window.requestAnimationFrame(timestamp => {
        this.loop(timestamp);
      });
    }
  }
}
