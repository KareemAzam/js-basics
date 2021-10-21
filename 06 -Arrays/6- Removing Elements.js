/**Removing Elements
 * arr.pop(); remove the last element and return the removed element
 * arr.shift(); remove the first element and return the removed element
 * arr.splice(): to remove elements in the middle
 */
const number = [1, 2, 3, 4];
console.log(number);

// End
const last = number.pop();
console.log(number);
console.log(last);
// Beginning
const first = number.shift();
console.log(first);
// Middle
number.splice(2, 1);
console.log(number);
