class Court {
  constructor(game) {
    this.game = game;
    this.image = new Image();
    this.image.src = '/IMAGES/Basketball Court-min.png';
  }

  drawCourt() {
    const canvasWidth = this.game.canvas.width;
    const canvasHeight = this.game.canvas.height;
    this.game.context.drawImage(this.image, 0, 0, canvasWidth, 350);
  }
}
