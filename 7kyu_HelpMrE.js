function evenator(str) {

  var x = str.replace(/[.,?!_]/g, "");
  var newArr = x.split(" ");

  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i].length % 2 !== 0) {
      var t = newArr[i].charAt(newArr[i].length -1);
      newArr[i] = newArr[i] + t;
    }
  }
   var newestArr = newArr.join(' ');

  return newestArr;
}
