/** 1. Object
// * object are collection of key value pairs
 * Definition
 *  let objName = {key:value}
 * key : can be any 
 * value : can be 
 *  value, object,array,function
 * access value
 *  Dot Notation
 *      objName.key
 *  Bracket Notation
 *      objName['key']
 */

// Define a circle variable and function
let radius = 1;
let x = 1;
let y = 1;

function draw() {
  console.log("draw");
}
// draw is a function
draw();

//object oriented programming (OOP)
// Define a circle object and method
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  // method
  draw: function () {
    console.log("draw");
  },
};

// draw is a function in side an object so it called method
circle.draw();
