function generateRange(min, max, step){
  var newArr = [];
  for (var i = min; i <= max; i+=step) {
    newArr.push(i);
  }
  return newArr;
}
