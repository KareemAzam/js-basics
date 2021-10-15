/**Logical Operators
 * Logical And (&&)
 *  return true if both operand are true
 * Logical Or (||)
 *  return true if one of the operand is true
 * Not (!)
 *  Returns false if its single operand that can be converted to true; otherwise, returns true.
 */

// Logical And (&&)
console.log(true && true); //true
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan); // true

// Logical And (&&)
console.log(true && false); // true
let highIncome_2 = true;
let goodCreditScore_2 = true;
let eligibleForLoan_2 = highIncome_2 && goodCreditScore_2;
console.log(eligibleForLoan_2); // true

// Not (!)
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);
