//Challenge: https://www.codewars.com/kata/557af9418895e44de7000053

var repeatIt = function(str, n) {
  var newArr = [];
  var newestArr = '';

  if (str !== str.toString()) {
    return "Not a string";
    }
  else {
    for (var i = 0; i < n; i++) {
    newArr.push(str) * n;
    }
    newestArr = newArr.join('');
  }
  return newestArr;
  }
