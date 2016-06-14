function digitize(n) {
  var newArr = [];
  var x = n.toString();
  var y = x.split('');
  for (var i = 0; i < y.length; i++) {
    var s = parseInt(y[i]);
    newArr.unshift(s);
  }
  return newArr;
}
