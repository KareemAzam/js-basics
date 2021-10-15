/** If
 * Definition
 * if(condition)
 *  statement
 * else (condition)
 *  statement
 * else
 *  statement
 */

// Hour
// If hour is between 6am and 12am : Good morning!
// if it is between 12pm and 6pm : Good afternoon!
// otherwise : Good evening

let hour = 10;
if (hour >= 6 && hour <= 12) console.log("Good Morning");
else if (hour >= 12 && hour <= 18) console.log("Good Afternoon");
else console.log("Good Evening");