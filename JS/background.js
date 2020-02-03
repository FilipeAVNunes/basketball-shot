class Court {
  constructor(game) {
    this.game = game;
    this.imageUrl = '/IMAGES/Basketball Court.H01.2k (1).png';
    this.image = new Image();
  }

  drawCourt() {
    this.image.src = this.imageUrl;

    this.image.addEventListener('load', () => {
      const canvasWidth = this.game.canvas.width;
      const canvasHeight = this.game.canvas.height;
      this.game.context.drawImage(this.image, -800, 0, 1800, canvasHeight);
    });
  }

  paint() {
    context.save();

    context.restore();
  }
}
