/** Dynamic Nature Of Of Objects
 * add a new key or method
 * delete key or method
 * Note :
 * const obj ={key:value}
 * we can reassign a obj like that obj = {}
 * but we can add or delete key
 */

const circle = {
  radius: 1,
};

//add a new key
circle.color = "yellow";
//add a new method
circle.draw = function () {
  console.log("draw");
};

//* circle now have new key and method
console.log(circle);

//* delete key or method
delete circle.color;
delete circle.draw;
//* circle now have only radius
console.log(circle);
