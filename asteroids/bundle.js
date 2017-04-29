/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(3);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(5);
const MovingObject = __webpack_require__(4);



const Asteroid = function(args) {
  this.color = "blue";
  this.radius = 5;
  this.vel = Util.randomVec(30);
  MovingObject.call(this,args);
};

Util.inherits(Asteroid,MovingObject);

let asteroid1 = new Asteroid({ pos: [30, 30] });


module.exports = Asteroid;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const GameView = __webpack_require__(0);
const Game = __webpack_require__(3);

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;
  const ctx = canvasEl.getContext("2d");
  let gameView_obj = new GameView(ctx);
  gameView_obj.start();

});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(1);

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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

const Util = {
  inherits (childClass, parentClass) {
    const Surogate = function () {};
    Surogate.prototype = parentClass.prototype;
    childClass.prototype = new Surogate();
    childClass.prototype.constructor = childClass;
    //
    // childClass.prototype = Object.create(parentClass.prototype);
    // childClass.prototype.constructor = childClass;
  },

  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },

  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }

};

module.exports = Util;


/***/ })
/******/ ]);