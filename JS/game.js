class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
  }

  setControlBindings() {
    const $buttonStart = document.getElementById('btn-start');
    const $buttonShoot = document.getElementById('btn-shoot');

    $buttonStart.addEventListener('click', () => {
      this.start();
    });

    $buttonShoot.addEventListener('click', () => {
      this.shoot();
    });
  }

  runLogic () {
    this.ball.runLogic();
    this.kobe.runLogic();
  }

  clearScreen () {
    const context = this.context;
    context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
}

