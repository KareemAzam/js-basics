/** Except
 * write a function name except take two parameters
 * (array,exclude)
 * exclude array have a value to exclude from array
 * return : new array without the values in exclude array
 */

const numbers = [1, 2, 3, 4];

// answer
const output = except(numbers, [1, 2, 3]);
console.log(output);

function except(array, exclude) {
  const output = [];
  for (let element of array)
    if (!exclude.includes(element)) output.push(element);

  return output;
}
