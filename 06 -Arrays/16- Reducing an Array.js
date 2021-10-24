/**Reducing an Array
 * Reduce : return all element of an array into a signal value
 * eg : sum of all array or string or object
 */

const numbers = [1, -1, 2, 3];

//sum without reduce
let sum = 0;
for (let n of numbers) sum += n;
console.log(sum);

// sum with reduce
// ((previousValue,currentValue) ,initialValue )
// initialValue : to initialize previousValue
// if it empty the initialValue = previousValue
let sum2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum2);
