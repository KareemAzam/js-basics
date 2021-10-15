/** Do-While
 * start with out variable as condition
 * statement executed at least once
 *
 * Definition
 * do{statement}
 *  While(condition)
 *
 * let i = 0
 do {statement; i++}
 * While(i < 5) 
 */


 // while the condition not true but the statement execute once 
let i = 9;
do {
  if (i % 2 !== 0) console.log(i);
    i++;
} while (i <5);
