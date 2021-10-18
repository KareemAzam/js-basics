/** Factory Functions
 * Circle is an object
 *  but if we need anther circle object like circle2
 *  we will copy and paste
 ** we will duplicate the method
 *
 * that way we use factory function or constructor function
 ** to get new object
 */

const circle = {
  radius: 1,
  // method
  draw: function () {
    console.log("draw");
  },
};
/*
const circle2 = {
  radius: 1,
  // method
  draw: function () {
    console.log("draw");
  },
};
*/

/** Factory Function
 * radius is hard coded value
 * radius : 1
 ** us parameters to initial radius value
 * createCircle(radius) {
 *  radius:radius
 * }
 ** Short syntax
 ** key: value : if the key and value(parameter) are the same just write the key
 * createCircle(radius) {
 *  radius
 * }
 *
 ** key:function(){} : dont use function keyword and add () after the key
 *  createCircle(radius){
 *   draw(){
 *   }
 *
 */

function createCircle() {
  return {
    radius: radius,

    // method
    draw: function () {
      console.log("draw");
    },
  };
}

//* Short syntax
function createCircle2(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

//* get new object
const circle1 = createCircle2(1);
console.log(circle1);
const circle2 = createCircle2(2);
console.log(circle2);
