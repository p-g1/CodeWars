function stringy(size) {
  var newArr = [];

  for (var i = 0; i < size; i++) {
    if (i % 2 === 0) {
      newArr.push('1');
      }
    else {
      newArr.push('0');
      }
     }
   var newestArr = newArr.join("");
   return newestArr;
}
