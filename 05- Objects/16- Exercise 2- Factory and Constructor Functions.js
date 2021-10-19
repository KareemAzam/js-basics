/**Factory and Constructor Functions
 * convert address object to
 * Factory Function
 * Constructor Function
 */

let address = {
  street: 'a',
  city: 'b',
  zipCode: 'c',
};

//* Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}
let addressFactoryFunction = createAddress('a', 'b', 'c');
console.log(addressFactoryFunction);

//* Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
let addressConstructorFunction = new Address('aa', 'bb', 'cc');
console.log(addressConstructorFunction);
