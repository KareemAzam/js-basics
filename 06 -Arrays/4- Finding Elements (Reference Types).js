/** Finding Elements (Reference Types)
 ** arr.find(function(arr){return arr.element })
 * if exists return element as object else return undefine
 *
 ** arr.findIndex(function(arr){return arr.element })
 * if exists return element as object else return -1
 */

const courses = [
  { id: 1, name: 'a' },
  { id: 1, name: 'b' },
];

const course = courses.find(function (course) {
  return course.name === 'a';
});

console.log(course);
