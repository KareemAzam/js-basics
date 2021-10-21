/**Emptying an Array
 ** Solution 1 : is the recommending
 * ! anther is referencing the number array but it will not empty
 ** Solution 2 : is the recommending and anther will also empty
 */

let number = [1, 2, 3, 4, 5];
let anther = number;

// Solution 1
number = [];

// Solution 2
number.length = 0;

// Solution 3
number.splice(0, number.length);

// Solution 4
while (number.length > 0) number.pop();
console.log(number);
console.log(anther);
