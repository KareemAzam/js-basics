/**Includes
 * Includes : return true if element exist
 *
 * implement Includes function
 * create a function name includes(array,searchElement)
 */

const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

// answer
function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;

  return false;
}

console.log(includes(numbers, 1));
