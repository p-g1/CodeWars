// Challange: https://www.codewars.com/kata/56d5166ec87df55dbe000063

function sumAverage(arr) {
console.log(arr);
  var result = [];
  var total = 0;
  var length = 0;
  var finalResult = 0;

  for (var i = 0; i < arr.length; i++) {
    length = arr[i].length;
    total = 0;
    for (var j = 0; j < arr[i].length; j++) {
      total += arr[i][j];
      }
      result.push(total/length);
      }
    for (var x = 0; x < result.length; x++) {
      finalResult += result[x];
      }
  return Math.floor(finalResult);

}
