/** Function are Objects
 * what of confusing Concept about javascript is that function are object
 * to ensure : functionName.(dot) we weill see all method and properties related to object
 * !note : i did't complete this video
 */

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const Circle1 = new Function(
  'radius',
  ` 
  this.radius = radius;
  this.draw = function () {
    console.log("draw");}
    `
);

const circle = new Circle1(1);
circle.draw();
