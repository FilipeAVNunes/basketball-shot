class BarOfShooting {
  constructor(game) {
    this.game = game;
    this.posx = 100;
    this.lineLength = 12;
    this.speed = 5;
    this.intervalWidth = 172;
  }
  shootingBar() {
    this.game.context.save();
    this.game.context.beginPath();
    this.game.context.lineWidth = 1;
    this.game.context.fillStyle = 'gold';
    this.game.context.fillRect(98, 439, 705, 53);
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
    this.game.context.strokeRect(98, 438, 705, 55);
    this.game.context.stroke();
    this.game.context.closePath();
    this.game.context.restore();
  }

  //------------------------------ interval----------------------------------------
  shootingInterval() {
    this.game.context.save();
    this.game.context.beginPath();
    this.game.context.strokeStyle = 'purple';
    this.game.context.lineWidth = 5;
    this.game.context.strokeRect(368, 436, this.intervalWidth, 59);
    this.game.context.stroke();
    this.game.context.closePath();
    this.game.context.restore();
  }

  // ----------------------------------shot line ------------------------------------

  drawLine() {
    this.game.context.save();
    this.game.context.beginPath();
    this.game.context.strokeStyle = 'black';
    this.game.context.lineWidth = 4;
    this.game.context.moveTo(this.posx, 440);
    this.game.context.lineTo(this.posx, 491);
    this.game.context.stroke();
    this.game.context.restore();
  }

  moveLine(timestamp) {
    this.posx += this.speed;

    if (this.posx < 102 || this.posx > 795) {
      this.speed = this.speed * -1;
    }
  }

  paint() {
    this.game.context.save();
    this.game.context.restore();
  }
}
