class Scoreboard {
  constructor(game) {
    this.game = game;
    this.$scoreSpan = document.querySelector('h1');
    this.score = 0;
  }

  scoringMachine() {
    this.$scoreSpan.innerHTML = `${this.score} Points `;
  }
}
