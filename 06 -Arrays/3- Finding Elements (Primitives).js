/**Finding Elements (Primitives)
 * indexOf() : return element index or -1 if not exist
 * lastIndexOf() : return last element index or -1 if not exist
 * include(): return boolean if the element exists
 */

const numbers = [1, 2, 1, 3, 4];

console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
// check if index exists
console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));
