/** Reference Types :
 * 1. Object
 * 2. Array
 * 3. Function
 */

/** 2. Array
 * Definition
 *    let arrName = [element,element]
 *      element : have index
 *      element : is dynamic type
 * access value
 *    arrName[index]
 * array is an object
 *    it's has properties and method
 */

let selectedColor = ["red", "blue"];

//use index to add more element
selectedColor[2] = "green";
selectedColor[3] = 1;

console.log(selectedColor);

console.log(selectedColor[0]);

console.log(selectedColor.length);
