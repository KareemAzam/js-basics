/** for in
 * to iterate over object key
 * to iterate over array elements
 * Definition
 * for(let key in person)
 */

// iterate over object
const person = {
  name: "kareem",
  age: 30,
};

// to access object key value
for (let key in person) {
  //! Dot Notation
  //! person.key : key is not key name in person object
  //! console.log(key, person.key); // name undefined;
  //* Bracket Notation
  //* person[key] : key value is the actual key name of the object
  console.log(key, person[key]); // name kareem;
}

// iterate over array elements
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}
