class Court {
  constructor(game) {
    this.game = game;
    this.imageUrl = '/IMAGES/Basketball Court-min.png';
    this.image = new Image();
  }

  drawCourt() {
    this.image.src = this.imageUrl;
    const canvasWidth = this.game.canvas.width;
    const canvasHeight = this.game.canvas.height;
    this.game.context.drawImage(this.image, 0, 0, canvasWidth, 350);
    this.image.addEventListener('load', () => {
      this.game.context.drawImage(this.image, 0, 0, canvasWidth, 350);
    });
  }

  paint() {
    context.save();

    context.restore();
  }
}
