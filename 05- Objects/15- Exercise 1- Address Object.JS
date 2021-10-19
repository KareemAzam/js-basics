/**Address Object
 * Create address object with three properties
 * street , city, zipCode
 * create a function not a method
 * showAddress(address) to display all the properties and their value
 */

let address = {
  street: 'a',
  city: 'b',
  zipCode: 'c',
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);
