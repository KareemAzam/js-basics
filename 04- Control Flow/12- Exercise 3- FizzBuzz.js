/**FizzBuzz
 * Write a function take an input and return a string
 * if input is :
 *  Not a number => 'Not a number'
 *  Divisible by both 3 and 5 => fizzBuzz
 *  Divisible by 3 => fizz
 *  Divisible by 5 => Buzz
 *  Not divisible by 3 or 5 => input
 */

const output = FizzBuzz("false");
console.log(output);

function FizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}
