function insertDash(num) {

var twoTone = num.toString().split('');
var length = twoTone.length - 1;
  var newArr = [];

  for (var i = 0; i < length; i++) {
    newArr.push(twoTone[i]);
    if (Number(twoTone[i]) % 2 !== 0 && Number(twoTone[i+1]) % 2 !== 0) {
      newArr.push('-');
      }
    }
  newArr.push(twoTone[twoTone.length -1]);
  var newer = newArr.join('');
  return newer;
}
