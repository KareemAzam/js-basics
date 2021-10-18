/** Constructor Function
 ** Definition
 * function FunctionName(){
 *      this.key = value;
 *      this.fun = function(){}
 *  }
 ** Name convention : Pascal Notation
 ** initial key : this.keyName=value (;) this.keyName=value
 ** get new object
 * const obj = new functionName(arguments);
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

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
console.log(circle);
