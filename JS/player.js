class Kobe {
  constructor(game) {
    this.game = game;

    this.kobeImage1 = new Image();
    this.kobeImage1.src = '/IMAGES/kobe1.png';

    this.kobeImage2 = new Image();
    this.kobeImage2.src = '/IMAGES/kobe2.png';

    this.kobeImage3 = new Image();
    this.kobeImage3.src = '/IMAGES/kobe3.png';
  }

  paint(number) {
    let image;
    switch (number) {
      case 1:
        image = this.kobeImage1;
        break;
      case 2:
        image = this.kobeImage2;
        break;
      case 3:
        image = this.kobeImage3;
        break;
    }
    this.game.context.drawImage(image, 280, 190, 60, 60);
  }
}
