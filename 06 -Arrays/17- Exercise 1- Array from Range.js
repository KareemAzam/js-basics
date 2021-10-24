/** Array from Range
 * write a function arrayFromRange take two parameters min & max
 * return array from min to max
 * eg . (1,4) , (-10,-4)
 */

const numbers = arrayFromRange(-10, -4);
console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}
