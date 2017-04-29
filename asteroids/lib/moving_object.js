function MovingObject (options) {
    this.pos = options.pos;
    this.vel = this.vel || options.vel;
    this.radius = this.radius || options.radius;
    this.color = this.color || options.color;
      console.log(this.vel);
}

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

//
// const ctx = MovingObject.getContext("2d");
const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);

module.exports = MovingObject;
