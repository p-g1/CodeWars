function doubleChar(str) {
  // Your code here
  var newArr = [];

  str = str.split('');
  var strl = str.length;
  for (var i = 0; i < strl; i++) {
   newArr.push(str[i]);
   newArr.push(str[i]);
}

var newestArr = newArr.join('');

return newestArr;
}
