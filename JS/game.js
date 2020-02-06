class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    this.shot = false;
    this.score = 0;
    this.setControlBindings();
  }

  setControlBindings() {
    const $buttonStart = document.getElementById('btn-start');
    const $buttonShoot = document.getElementById('btn-shoot');
    const $buttonRestart = document.getElementById('btn-restart');

    $buttonShoot.addEventListener('click', event => {
      event.preventDefault();
      this.shoot();
    });

    $buttonRestart.addEventListener('click', event => {
      event.preventDefault();
      this.restartGame();
    });
  }

  shoot() {
    //HERE WE NEED THE IF STATMENTS TO SEE WHAT FUNCTION OF THE BALL TO RUN
    this.isRunning = false;
    this.shot = true;

    const positionX = this.BarOfShooting.posx;

    if (positionX >= 99 && positionX < 400) {
      this.ball.ballMissedShort();
      this.audioBuzzer();
    } else if (positionX > 490 && positionX <= 855) {
      this.ball.ballMissedLong();
      this.audioBuzzer();
    } else {
      this.ball.ballScore();
      this.audioSwish();
    }
  }

  audioSwish() {
    setTimeout(function() {
      let audio = new Audio('/AUDIO/Swish.mp3');
      audio.play();
    }, 500);
  }

  audioBuzzer() {
    setTimeout(function() {
      let audioBuzzing = new Audio('/AUDIO/Buzzer-SoundBible.com-188422102.mp3');
      audioBuzzing.play();
    }, 500);
  }

  reset() {
    this.Kobe = new Kobe(this);
    this.BarOfShooting = new BarOfShooting(this);
    this.Court = new Court(this);
    this.ball = new Ball(this);
    this.scoreboard = new Scoreboard(this);
  }

  gameover() {
    setTimeout(function() {
      document.getElementById('canvas').style.display = 'none';
      // document.getElementById('canvas').classList.add('hide');
      // document.getElementById('sidebar').classList.add('hide');
      document.getElementById('gameover').classList.remove('hide');
    }, 750);
  }

  startGame() {
    // document.getElementById('sidebar').style.display = 'show';
    document.getElementById('canvas').classList.remove('hide');
    document.getElementById('myDIV').style.display = 'none';
    document.getElementById('canvas').style.display = 'flex';

    document.getElementById('score').classList.remove('hide');
    document.getElementById('sidebar').classList.remove('hide');
    this.reset();
    if (!this.isRunning) {
      this.isRunning = true;
      this.loop();
    }
  }

  restartGame() {
    this.reset();
    this.isRunning = true;
    this.scoreboard.score = 0;
    document.getElementById('canvas').classList.remove('hide');
    document.getElementById('canvas').style.display = 'flex';
    document.getElementById('gameover').classList.add('hide');
    document.getElementById('sidebar').classList.remove('hide');
    document.getElementById('sidebar').style.display = 'flex';
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  runLogic(timestamp) {
    if (this.isRunning) {
      this.BarOfShooting.moveLine(timestamp);
      this.scoreboard.scoringMachine();
    } else if (this.shot) {
      this.ball.runLogic();
    }
  }

  paint() {
    this.clearScreen();
    this.Court.drawCourt();
    this.BarOfShooting.paint();
    if (this.isRunning) {
      this.Kobe.paint(1);
    } else if (this.shot) {
      this.Kobe.paint(3);
      // this.Kobe.drawKobe(3);
      this.ball.paint();
    }
  }

  loop(timestamp) {
    console.log('game is running', this.scoreboard.score);
    this.runLogic(timestamp);
    this.paint();
    if (this.isRunning || this.shot) {
      window.requestAnimationFrame(timestamp => {
        this.loop(timestamp);
      });
    }
  }
}
