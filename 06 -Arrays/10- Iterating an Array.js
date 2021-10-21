/** 10- Iterating an Array
 *
 */

const numbers = [1, 2, 3];

// approach 1 : we can't use index
// use for-in loop to access index
for (let number of numbers) console.log(number);

// approach 2
numbers.forEach((number) => console.log(number));

// approach 2: with index
numbers.forEach((number, index) => console.log(index, number));
