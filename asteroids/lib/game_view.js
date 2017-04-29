const Game = require("./game");

const GameView = function (ctx) {
  this.game = new Game;
  this.ctx = ctx;
};

GameView.prototype.start = function () {
  let game = this.game;
  setInterval(() => {
    game.moveObjects();
    game.draw(this.ctx);
  }, 200);
};


module.exports = GameView;
