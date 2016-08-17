// Challenge: https://www.codewars.com/kata/5505552bd181b990d9000caf

function deleteValues(array, pred) {
var x = array.length;
var d = [];

  for (var i = 0; i < x; i++) {
    if (pred(array[i])) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}
