/**Even and Odd Numbers
 * write a function that take parameters name limit
 * pass a number like 10 as limit parameter
 * return all number from 0 to limit
 * next to each number display if number is even or odd
 */

showNumber(10);
function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    let message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}
