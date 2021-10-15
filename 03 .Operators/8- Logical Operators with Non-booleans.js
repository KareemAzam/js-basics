/**Logical Operators with Non-booleans
 *  Falsy (false)
 *      Undefined
 *      null
 *      0
 *      false
 *      ''
 *      NaN
 *  Truthy (true)
 *      Any thing is not falsy => truthy
 *  Short-circuiting
 *   as soon we fined an operand that is truthy that operand is return
 */

console.log(false || true); // true

// kareem is not a falsy value
console.log(false || "kareem"); // kareem

// 1 is not a falsy value
console.log(false || 1); // 1

// Short-circuiting
// 1 is not a falsy value and is the first truthy value
console.log(false || 1 || 2); // 1

var userColor = "red";
var defaultColor = "blue";
var currentColor = userColor || defaultColor;

console.log(currentColor); // red

// if user didn't select a color or color is undefined
console.log(currentColor); // blue
