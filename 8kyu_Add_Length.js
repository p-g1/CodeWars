//Challenge: https://www.codewars.com/kata/559d2284b5bb6799e9000047

function addLength(str){
  var newStr = str.split(' ');
  var newArr = [];

  for (var i = 0; i < newStr.length; i++) {
    var x = newStr[i].length;
    newArr.push(newStr[i] + ' ' + x);
    }

  return newArr;
}
