/** Testing the Elements of an Array
 * every : check to see at lest one element that don't match expression
 * some : check to see at lest one element  match expression
 */

const numbers = [1, 2, -1, 3, 4];

const allPositive = numbers.every((value) => value >= 0);
const atLestOnePositive = numbers.some((value) => value >= 0);

console.log(allPositive); // false
console.log(atLestOnePositive); // true
