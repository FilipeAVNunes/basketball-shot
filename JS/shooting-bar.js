class BarOfShooting {
  constructor(game) {
    this.game = game;
    this.posx = 100;
    this.lineLength = 12;
    this.speed = 5;
    this.intervalWidth = 90;
  }

  shootingBar() {
    this.game.context.save();
    this.game.context.beginPath();
    this.game.context.lineWidth = 1;
    this.game.context.fillStyle = 'gold';
    this.game.context.fillRect(98, 339, 705, 53);
    this.game.context.stroke();
    this.game.context.closePath();
    this.game.context.restore();
  }

  // ----------------------------shooting bar margin-------------------------------------
  marginShootingBar() {
    this.game.context.save();
    this.game.context.beginPath();
    this.game.context.strokeStyle = 'goldenrod';
    this.game.context.lineWidth = 5;
    this.game.context.strokeRect(98, 338, 705, 55);
    this.game.context.stroke();
    this.game.context.closePath();
    this.game.context.restore();
  }

  //------------------------------ interval----------------------------------------
  shootingInterval() {
    this.game.context.save();
    this.game.context.beginPath();
    this.game.context.strokeStyle = 'rebeccapurple';
    this.game.context.lineWidth = 5;
    this.game.context.strokeRect(400, 337, this.intervalWidth, 57);
    this.game.context.stroke();
    this.game.context.closePath();
    this.game.context.restore();
  }

  // ----------------------------------shot line ------------------------------------

  drawLine() {
    this.game.context.save();
    this.game.context.beginPath();
    this.game.context.strokeStyle = '#3e1d62';
    this.game.context.lineWidth = 4;
    this.game.context.moveTo(this.posx, 340);
    this.game.context.lineTo(this.posx, 391);
    this.game.context.stroke();
    this.game.context.restore();
  }

  paint() {
    this.shootingBar();
    this.marginShootingBar();
    this.shootingInterval();
    this.drawLine();
  }

  moveLine(timestamp) {
    this.posx += this.speed;

    if (this.posx < 102 || this.posx > 795) {
      this.speed = this.speed * -1;
    }
  }
}
