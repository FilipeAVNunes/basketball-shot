class Ball {
  constructor(game) {
    this.game = game;
    this.x = 310;
    this.y = 155;
    this.ballSpeed = 20;
    this.timer = 0;
    this.shotCoordinates = [];

    const ballUrl = '/IMAGES/Bola.png';
    this.ballImage = new Image();
    this.ballImage.src = ballUrl;
  }

  paint() {
    if (this.shotCoordinates.length > 29) {
      const x = this.shotCoordinates[29][0];
      const y = this.shotCoordinates[5][1];
      this.game.context.drawImage(this.ballImage, x, y);
    }
  }

  runLogic() {
    console.log('ball is running');
    const isMoving = this.shotCoordinates.length > 29;
    if (isMoving) {
      this.shotCoordinates.shift();
    } else {
      this.game.isRunning = true;
      this.game.shot = false;
      // this.game.restartGame();
    }
  }

  ballScore() {
    //first we need to have a formula and create the array of positions
    const a = 1 / 122;
    const b = -4;
    const c = 500;
    this.shotCoordinates = [];

    for (let i = 73; i < 590; i += 500 / 60) {
      let x = i;
      let y = a * x ** 2 + b * x + c;
      const coordinate = [x, y];
      this.shotCoordinates = [...this.shotCoordinates, coordinate];
    }
    this.game.BarOfShooting.speed *= 1.2;
    this.game.scoreboard.score += 3;
  }

  ballMissedShort() {
    const a = 1 / 100;
    const b = -4;
    const c = 500;
    this.shotCoordinates = [];

    for (let i = 73; i < 515; i += 500 / 60) {
      let x = i;
      let y = a * x ** 2 + b * x + c;
      const coordinate = [x, y];
      this.shotCoordinates = [...this.shotCoordinates, coordinate];
    }
  }

  ballMissedLong() {
    const a = 1 / 135;
    const b = -4;
    const c = 500;
    this.shotCoordinates = [];

    for (let i = 73; i < 665; i += 500 / 60) {
      let x = i;
      let y = a * x ** 2 + b * x + c;
      const coordinate = [x, y];
      this.shotCoordinates = [...this.shotCoordinates, coordinate];
    }
  }

  /*
  ballMoving() {
    /////////////////////////////////////// SHORT//////////////////////////////////////////////////
    

      //console.log(coordinates);

      const paint = (x, y) => {
        const ballUrl = '/IMAGES/Bola.png';

        const ball = new Image();
        ball.src = ballUrl;

        context.drawImage(ball, x, y);
      };

      const ballLoop = setInterval(() => {
        if (coordinates.length > 29) {
          this.game.isRunning = false;
          this.game.context.clearRect(0, 0, 900, 500);
          this.game.paint();
          this.game.Court.drawCourt();
          this.game.Kobe.drawKobe(1);
          paint(coordinates[29][0], coordinates[5][1]);
          coordinates.shift();
        } else {
          clearInterval(ballLoop);
          this.game.isRunning = true;
          this.game.loop();
        }
      }, 20);
      /////////////////////////////////////////////LONG///////////////////////////////////////
    } 

      //console.log(coordinates);

      const paint = (x, y) => {
        const ballUrl = '/IMAGES/Bola.png';

        const ball = new Image();
        ball.src = ballUrl;

        context.drawImage(ball, x, y);
      };

      const ballLoop = setInterval(() => {
        if (coordinates.length > 29) {
          this.game.isRunning = false;
          this.game.context.clearRect(0, 0, 900, 500);
          this.game.paint();
          this.game.Court.drawCourt();
          this.game.Kobe.drawKobe(1);
          paint(coordinates[29][0], coordinates[5][1]);
          coordinates.shift();
        } else {
          clearInterval(ballLoop);
          this.game.isRunning = true;
          this.game.loop();
        }
      }, 20);
    } else {
      //////////////////////////////////////////// SCORE ///////////////////////////////////
      const a = 1 / 122;
      const b = -4;
      const c = 500;
      let coordinates = [];

      for (let i = 73; i < 590; i += 500 / 60) {
        let x = i;
        let y = a * x ** 2 + b * x + c;
        const coordinate = [x, y];
        coordinates = [...coordinates, coordinate];
      }

      //console.log(coordinates);

      const paint = (x, y) => {
        const ballUrl = '/IMAGES/Bola.png';

        const ball = new Image();
        ball.src = ballUrl;

        context.drawImage(ball, x, y);
      };

      
      const ballLoop = timestamp => {
        console.log('im running also');
        if (coordinates.length > 29) {
          console.log('im running');
          this.game.isRunning = false;
          this.game.context.clearRect(0, 0, 1000, 1000);
          this.game.paint();
          this.game.Court.drawCourt();
          this.game.Kobe.drawKobe(1);
          if (this.time < timestamp - this.ballSpeed) {
            paint(coordinates[29][0], coordinates[5][1]);
            coordinates.shift();
          }
        } else {
          cancelAnimationFrame(this.ballAnimation);
          this.game.isRunning = true;
          this.game.loop();
        }
        this.ballAnimation = window.requestAnimationFrame(ballLoop(timestamp));
      };
      ballLoop();


      const ballLoop = setInterval(() => {
        if (coordinates.length > 29) {
          this.game.isRunning = false;
          this.game.context.clearRect(0, 0, 1000, 1000);
          this.game.paint();
          this.game.Court.drawCourt();
          this.game.Kobe.drawKobe(1);
          paint(coordinates[29][0], coordinates[5][1]);
          coordinates.shift();
        } else {
          clearInterval(ballLoop);
          this.game.isRunning = true;
          this.game.loop();
        }
      }, 1);
    }
  }

  ballLoop(timestamp) {
    console.log('im runnig');
    if ((this.game.shot = true)) {
      this.ballMoving();
      //this.game.Court.drawCourt();
    }
    if (this.game.isRunning) {
      window.requestAnimationFrame(timestamp => {
        this.ballLoop(timestamp);
      });
    }
  }
}


  paint() {
    const context = this.game.context;
    context.save();
    context.restore();
  }
}
*/
}
