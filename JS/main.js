const canvas = document.querySelector('canvas');

const game = new Game(canvas);

window.onload = function() {
  document.getElementById('btn-start').onclick = function() {
    game.startGame();
  };
};
