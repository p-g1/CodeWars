// Challenge: https://www.codewars.com/kata/53d56645ed770fb7c500085f

var find = function(string, array) {
  for(var i = 0; i < array.length; i++)
    if(array[i] === string)
      return true;
  return false;
}
