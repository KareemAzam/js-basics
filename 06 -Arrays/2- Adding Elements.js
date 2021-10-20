/**Adding Elements
 * arr.push(); to add elements at the end
 * arr.unshift(); to add elements at the beginning
 * arr.splice(): to add elements in the middle
 */

const number = [1, 2];

number.length;

// End
number.push(5, 6);
// Beginning
number.unshift(1, 2);
// Middle
number.splice(2, 0, 'a', 'b');

console.log(number);
