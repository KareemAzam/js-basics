/**Sorting Arrays
 * Sort() : sort convert every value to string first then sort the array
 * sort work different with
 * primitive type
 * reference type
 */

//* Primitive type
const numbers = [2, 3, 1];
// sort()
console.log(numbers.sort());
// reverse
console.log(numbers.reverse());

//* Reference type
const courses = [
  { id: 1, name: 'Node.js' },
  { id: 1, name: 'JavaScript' },
];

courses.sort((a, b) => {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);
