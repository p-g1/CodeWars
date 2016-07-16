//Challenge: https://www.codewars.com/kata/56f699cd9400f5b7d8000b55

function fixTheMeerkat(arr) {
  var newArr = [];
  for (var i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
