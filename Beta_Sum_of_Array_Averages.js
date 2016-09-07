// Challange: https://www.codewars.com/kata/56d5166ec87df55dbe000063

function sumAverage(arr) {
  var total = 0;
  var final = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      total += arr[i][j];
      }
      final += total/arr[i].length;
      total = 0;
      }
   return Math.floor(final);
}
