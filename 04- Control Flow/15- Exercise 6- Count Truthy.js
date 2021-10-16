/**Count Truthy
 * create a function name countTruthy take an array
 * return the number f truthy element of this array
 
**Logical Operators with Non-booleans
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

const array = [0, null, undefined, "", 2, 3];
console.log(countTruthy(array));
function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
