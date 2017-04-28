// function sum() {
//   var args = Array.prototype.slice.call(arguments);
//   return args.reduce( (acc,val) => acc+ val );
// }
//
// console.log(sum(1,2,3));
//
// function sum2(...args) {
//   return args.reduce( (acc,val) => acc+ val );
// }
//
// console.log(sum2(2,3,4,5));
//
// // Function.prototype.myBind = function (obj) {
// //   var args = Array.prototype.slice.call(arguments);
// //   args.shift();
// //   const that = this;
// //   return (function() {
// //     let args2 = (Array.prototype.slice.call(arguments));
// //     return that.apply(obj,args.concat(args2));
// //   });
// // };
//
// Function.prototype.myBind = function (obj,...args) {
//   const that = this;
//   return (function(...args2) {
//     return that.apply(obj,args.concat(args2));
//   });
// };
//
//
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

Function.prototype.curry = function (numargs) {
  var that = this;
  var args = [];
  return (function next(nextArg) {
    args.push(nextArg);
    if (args.length === numargs) {
      return that(...args);
    } else {
      return next;
    }
  });
};

// Function.prototype.curry = function curry(numargs) {
//   var args = [];
//   args.push(numargs);
//   console.log(args);
//   if (args.length === args[0] + 1) {
//     let funcArgs = args.slice(1);
//     console.log('time to evaluate');
//     return this(...funcArgs);
//   } else {
//     args.push(numargs);
//     console.log('currying..');
//     return curry(args);
//   }
// };

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
sumThree(4, 20, 6); // == 30
let f1 = sumThree.curry(3);
console.log(f1);
f1 = f1(4);
console.log(f1);
f1 = f1(20);
console.log(f1);
f1 = f1(6);
console.log(f1);

// or more briefly:
sumThree.curry(3)(4)(20)(6); // == 30

function curriedSum(numArgs) {
  var args = [];
  return function _curriedSum(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return args.reduce((acc,val) => acc+ val );
    } else {
      return _curriedSum;
    }
  };
}

const sum = curriedSum(4);
console.log( sum(5)(30)(20)(1)); // => 56
