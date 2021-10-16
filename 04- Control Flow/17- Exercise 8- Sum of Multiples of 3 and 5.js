/**Sum of Multiples of 3 and 5
 * create function sum(limit) take number a limit
 * return => all the sum of all the multiple of 3 and 5 from 0 up to limit
 * eg. what are the multiple of 3 and 5 between 0 and 10
 * multiple of 3 are : 3, 6, 9
 * multiple of 5 are : 5, 10
 * if we add this number together the result will 33
 */

console.log(sum(10));

function sum(limit) {
  let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

  return sum;
}
