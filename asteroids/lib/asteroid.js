const Util = require("./utils");
const MovingObject = require("./moving_object");



const Asteroid = function(args) {
  this.color = "blue";
  this.radius = 5;
  this.vel = Util.randomVec(30);
  MovingObject.call(this,args);
};

Util.inherits(Asteroid,MovingObject);

let asteroid1 = new Asteroid({ pos: [30, 30] });


module.exports = Asteroid;
