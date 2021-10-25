/**Moving an Element
 * create function move to move an element in array
 * parameters:
 * array:
 * index : the index of element to move
 * offset: how many element to move right or left
 */

const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 0);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid Offset');
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
