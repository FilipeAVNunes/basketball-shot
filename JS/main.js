const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const game = new Game(canvas);
function drawEverything() {
  shootingLine();
}

drawEverything();
