/** Reference Types :
 * 1. Object
 * 2. Array
 * 3. Function
 */

/** 1. Object
 * Definition
 *  let objName = {key:value}
 * access value
 *  Dot Notation
 *      objName.key
 *  Bracket Notation
 *      objName['key']
 */

let person = {
  name: "kareem",
  age: 30,
};

// Dot Notation
person.name = "Azam";
// Bracket Notation
let key = "name";
// person["name"] = "kareem Azam";
person[key] = "kareem Azam";
console.log(person);
