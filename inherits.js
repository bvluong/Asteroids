//
// Function.prototype.inherits = function (parentClass) {
//   const Suragate = function () {};
//   Suragate.prototype = parentClass.prototype ;
//   this.prototype = new Suragate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function (parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};
//
//
// function Dog(name) {
//   this.name = name;
// }
//
// function Animal(name) {
//   this.name = name;
// }
//
// Dog.prototype.woof = function () {
//   console.log("wooooof");
// };
//
// Animal.prototype.eat = function () {
//   console.log(`${this.name} is eating this`);
// };
//
//
// x = new Dog('Sam');
// x.woof();
//
// Dog.inherits(Animal);
// let d = new Dog("bryant");
// d.eat();
// console.log(d.constructor);
