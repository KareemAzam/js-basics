/** Arrow Functions
 * convert predicate function to arrow function
 * clear function
 * => add arrow
 * remove () :if function has one parameters remove parentis
 * remove return and {} : if one statement
 *
 * Finlay :
 * (course) => course.name === 'a'
 * course goes to course.name ==='a'
 */

const courses = [
  { id: 1, name: 'a' },
  { id: 1, name: 'b' },
];

// const course = courses.find(function (course) {
//   return course.name === 'a';
// });

const course = courses.find((course) => course.name === 'a');

console.log(course);
