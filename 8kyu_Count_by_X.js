// Challenge: https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, n) {
  var newArr = [];
  var count = 0;
  var v = x * n;
  while (count < v) {
    count = count + x;
      newArr.push(count);
      }

  return newArr;
}
