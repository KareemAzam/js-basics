/** Demerit Points
 * Write a function checkSpeed take a parameter that's the speed of a car
 * speed limit = 70
 * if a car speed =< sped limit => ok
 * every 5 kilometer above the speed limit => 1 point
 *  eg speed limit = 75 => 1 point
 *  eg speed limit = 72 => ok
 * if point = 12 => suspended
 */
checkSpeed(70);
checkSpeed(72);
checkSpeed(75);
checkSpeed(80);
checkSpeed(125);
checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log("ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}
