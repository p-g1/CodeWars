//Challenge: https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks) {
  var total = 0;
  for (var i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return Math.floor(total/marks.length);
}
