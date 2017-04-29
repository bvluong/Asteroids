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
