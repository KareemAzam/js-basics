/**Prime Numbers
 * create function showPrime(limit)
 * return => all the prime number up to this limit
 *
 * prime number : whose factors are only 1 and itself
 */

showPrimes(10);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
