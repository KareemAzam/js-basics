/** Constructor Property
 * every object in javascript has a property called constructor
 * and that reference the function that used to construct or create that object
 */

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);
console.log(circle.constructor);
//* console output
// ƒ Object() { [native code] }

/**
//  * when we declare an object using object Literal syntax
let x = {}
=> let x = new object();
internally javascript uses this contractor function (ƒ Object() { [native code] })
the circle object are created and return from factory function 
and because we use the object Literal syntax it created uses this object constructor function

** anther builtin constructor but we use Literal syntax
new String; // '',"",``
new Boolean; //true,false
new Number: // 1,2,3 
 */

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const anther = new Circle(1);
console.log(anther.constructor);
//* console output
/*
ƒ Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
 */
