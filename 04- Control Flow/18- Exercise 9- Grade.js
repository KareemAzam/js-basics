/**Grade
 * write a function calculateGrade(array) to calculate a mark of student
 * * const marks =[80,80,50]
 * - calculate average
 * return grade based on average value
 * eg. average = 70
 * 1  - 59  => F
 * 60 - 69  => D
 * 70 - 79  => C
 * 80 - 89  => B
 * 90 - 100 => A
 */

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}
