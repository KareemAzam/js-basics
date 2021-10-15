/** Break and Continue
 * Change how loop behave
 * Break stop loop
 * continue make loop go to start
 */

let i = 0;
while (i <= 10) {
  //   if (i === 5) break;

  if (i % 5 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
