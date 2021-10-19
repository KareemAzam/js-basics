/** String
 * String is extended method
 * Strings can be created as primitives, from string literals,
 * or as primitives, using the String() constructor:
 *
 * string.length : Returns the length of a String object.
 *
 * string[0]: access an individual character in a string.
 *
 * string.includes() return true or false
 * string.startsWith() return true or false
 * string.endsWith() return true or false
 *
 * string.indexOf() : get index
 *
 * string.replace(word,antherWord) return new string
 *
 * string.toUpperCase : Converts all the alphabetic characters in a string to uppercase
 * string.toLowerCase : Converts all the alphabetic characters in a string to LowerCase
 *
 * message.trim() Removes white space and line terminator characters from a string.
 *
 *message.split(' ') Split a string into substrings using the specified separator and
                     return them as an array.
 */

//string primitives
const message = 'this is my first message';
console.log(message.length);
console.log(message[0]);
console.log(message.includes('my'));
console.log(message.startsWith('this'));
console.log(message.endsWith('this'));
console.log(message.indexOf('my'));
console.log(message.replace('first', 'second'));
console.log(message.toUpperCase());
console.log(message.toLowerCase('first', 'second'));
console.log(message.trim());
console.log(message.split(' '));
//string object
const anther = 'hi';
