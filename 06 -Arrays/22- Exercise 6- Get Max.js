/**Get Max
 * create function getMax(array)
 * return => the largest number of this array
 * if array is empty return undefined
 */

const numbers = [1, 2, 3, 4, 50];

const max = getMaxReduce(numbers);

console.log(max);

// implementation one
function getMax(array) {
  if (array.length === 0) return undefined;
  let max = array[0];
  for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
  return max;
}

// implementation two
function getMaxReduce(array) {
  if (array.length === 0) return undefined;
  return array.reduce((accumulator, current) =>
    accumulator > current ? accumulator : current
  );
}
