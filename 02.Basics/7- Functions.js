/** Reference Types :
 * 1. Object
 * 2. Array
 * 3. Function
 */

/** 3. Function
 * Definition
 *  function funcName(parameters){function name}
 * Call function
 *    funcName(arguments);
 */

// * Definition
function great(name, lastName) {
  console.log("Hello" + " " + name + " " + lastName);
}

// * Call function
great("kareem"); // lastName != value then undefined 
great("kareem ", "Azam");
