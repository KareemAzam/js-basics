/** Count Occurrences
 *  write a function countOccurrencesReduce
 * parameters: array , searchElement
 * return : the number of time has searchElement occurred in this array
 */

const numbers = [1, 2, 3, 4, 1];
const count = countOccurrencesReduce(numbers, 1);

console.log(count);

// implementation one
function countOccurrences(array, searchElement) {
  let count = 0;
  for (let element of array) if (element === searchElement) count++;
  return count;
}

// implementation two
function countOccurrencesReduce(array = [], searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement, occurrence);
    return accumulator + occurrence;
  }, 0);
}
