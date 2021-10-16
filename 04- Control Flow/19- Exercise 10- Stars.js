/**Stars
 * write a function showStar with a parameter called rows
 * return => * in each rows , the number of (*) should be = the number of rows
 */

showStar(10);
function showStar(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
