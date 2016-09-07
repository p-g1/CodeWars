// Challenge: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function(arr){

  var start = 0;
  var end = arr.length;
  var runningTotal = 0;
  var newArr = [];
  var total = 0;
  var finalTotal = 0;

  if (arr.length < 1) {
    return 0;
    }
  else if (arr.length === 1) {
    return arr[0];
    }
  else {

  function startToFinish(arr) {
    for (var i = start; i < end; i++) {
      runningTotal+= arr[i];
      newArr.push(runningTotal);
        }
      total = Math.max.apply(Math, newArr);
      runningTotal = 0;
      newArr = [];
      }

     while (start < arr.length) {
       startToFinish(arr);
       start++;
       if (total > finalTotal) {
         finalTotal = total;
         }
      }

  return finalTotal;
  }
}
