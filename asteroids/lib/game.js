const Asteroid = require("./asteroid");

const Game = function() {
  this.asteroids = [];
  this.addAsteroids();
};

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function () {
  for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
    const asteroid = new Asteroid({pos:[this.randomPosition(),this.randomPosition()]});
    this.asteroids.push(asteroid);
  }

};

Game.prototype.randomPosition = function () {
  return Math.floor(Math.random()*500);
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = "Red";
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach ( (asteroid) => asteroid.draw(ctx) );
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach ( (asteroid) => asteroid.move() );
};


module.exports = Game;
