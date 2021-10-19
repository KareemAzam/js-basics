/** Math
 * Math is built-in Object
 * Math.random()
 * Math.round()
 * Math.max()
 * Math.min()
 */

// Math.random() => return a random number
console.log(Math.random());

//Math.round(1)=> returns the value of a number rounded to the nearest integer
console.log(Math.round(1.5));

//Math.max()
console.log(Math.max(1, 3, 2)); // expected output: 3

console.log(Math.max(-1, -3, -2)); // expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1)); // expected output: 3

//Math.min()
console.log(Math.min(1, 3, 2)); // expected output: 3

console.log(Math.min(-1, -3, -2)); // expected output: -1

const array1 = [1, 3, 2];

console.log(Math.min(...array1)); // expected output: 3
