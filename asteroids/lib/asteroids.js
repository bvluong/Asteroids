const GameView = require("./game_view");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;
  const ctx = canvasEl.getContext("2d");
  let gameView_obj = new GameView(ctx);
  gameView_obj.start();

});
