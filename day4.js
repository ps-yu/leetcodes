// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.
// give fn as an input
var once = function(fn) {
  // for tracking like function is called or not
  let isCalled = false;
  // we have to return a function
  return function(...args){
      // if function is called , we have to return undefined
      if(isCalled) return undefined;
      // change is called to true
      isCalled = !isCalled;
      // it will also return a function (otherwise)
      return fn(...args);
  }
};