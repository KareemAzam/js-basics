/** While
 * start with out variable as condition
 * Definition
 *  While(condition){
 *      statement;
 * condition++;
 *  }
 *let i = 0
 * While(i < 5) {
 *  {statement}
 *  i++
 *  }
 */

let i = 0;
while (i < 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
