/*
if u dont need to reassign 
const your best choice
otherwise 
use let
*/
const interestRate = 0.3;

interestRate = 1; //Uncaught TypeError: Assignment to constant variable.

console.log(interestRate);
