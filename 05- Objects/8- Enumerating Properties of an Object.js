/**
 ** (let key of object)
 * for_of only use with i
 *! for (let key of circle) {
 *! console.log(key, circle[key]);
 *! }
 *! error=> circle is not iterable
 */

const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

for (let key in circle) {
  console.log(key, circle[key]);
}

//* Object.keys(obj) :
//  Returns string[] the names of the enumerable string properties and methods of an object.
for (let key of Object.keys(circle)) {
  console.log(key, circle[key]);
}

//* Object.entries(obj) :
// Returns an array of key/values of the enumerable properties of an object.
for (let entry of Object.entries(circle)) {
  console.log(entry);
}

// check if property exists
if ('radius' in circle) {
  console.log('yes');
}
