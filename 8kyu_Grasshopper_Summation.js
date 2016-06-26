//Challenge: https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
  var newArr = [];
  var total = 0;

  for (var i = 0; i <= num; i++) {
    newArr.push(i);
    }

  for (var x = 0; x < newArr.length; x++) {
    total += newArr[x];
    }
    return total;
}
