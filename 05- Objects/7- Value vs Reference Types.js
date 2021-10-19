/** Primitive Types Or Value Type :
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. undefined
 * 5. null
 */
/** Reference Types :
 * 1. Object
 * 2. Array
 * 3. Function
 */

/**
 * How primitive type and reference type behave differently
 ** primitive type : are copied by their value
 ** reference type :are copied by their reference
 */
let x = 10;
let y = x;

x = 20;
console.log('x =', x); //20;
console.log('y =', y); //10;
/**
 * x and y are two indebted variable
 */

let a = { value: 10 };
let b = a;

a.value = 20;

console.log('a = ', a);
console.log('b = ', b);
