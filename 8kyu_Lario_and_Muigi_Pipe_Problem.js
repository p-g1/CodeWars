function pipeFix(numbers){
  var max = numbers[numbers.length -1];
  var min = numbers[0];
  var newArr = [];

  for (var i = min; i <= max; i++) {
    newArr.push(i);
  }
  return newArr;
}
