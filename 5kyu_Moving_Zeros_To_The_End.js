// Challenge: https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {

  var length = arr.length;

  for (var i = 0; i < length; i++) {
    if (arr[i] === 0) {
      var a = Number(arr.splice(i, 1));
      arr.push(a);
      i--;
      length--;
      }
    }
    return arr;
}
