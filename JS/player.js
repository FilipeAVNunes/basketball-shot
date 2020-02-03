class Kobe {
  constructor(game) {
    this.game = game;
  }

  drawKobe(number) {
    const kobeUrl = `/IMAGES/kobe${number}.png`;
    const kobe = new Image();
    kobe.src = kobeUrl;

    kobe.addEventListener('load', () => {
      this.game.context.drawImage(kobe, 300, 230, 60, 60);
    });
  }

  paint() {
    context.save();
    context.restore();
  }

}
