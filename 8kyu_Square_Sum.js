// Challenge: https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers){
var newArr = [];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] * numbers[i]);
  }
for (var j = 0; j < newArr.length; j++) {
  total += newArr[j];
  }
  return total;
}
