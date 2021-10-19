/** Date
 * Date objects represent a single moment in time
 * new Date()
 * constructor :
 * new Date()
 * new Date(2021, 9, 19)
 * new Date('Tue Oct 19 2021')
 *
 * method :
 * get or set a date or a bart of a date
 *
 * formate date :
 * toDateString
 * toTimeString
 * toISOString
 * toLocaleDateString
 * toLocaleString
 */

const now = new Date();
console.log(now);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleString());

const date1 = new Date('Tue Oct 19 2021');
const date2 = new Date(2021, 9, 19);

console.log(date1);
console.log(date2);
