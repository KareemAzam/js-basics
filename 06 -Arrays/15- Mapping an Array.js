/**Mapping an Array
 * return new array when expression === true
 * we can each element of the array to something else like :
 * html
 * object
 */

const number = [1, -1, 2, 3];

const filter = number.filter((n) => n >= 0);

const items = filter.map((n) => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '</ul>';

// map to an object
const items2 = filter.map((n) => ({
  value: n,
}));
console.log(items2);
