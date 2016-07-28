// Challenge: https://www.codewars.com/kata/559ac78160f0be07c200005a

function nameShuffler(str){
  var x = str.split(' ');
  var newArr = [x[1], x[0]];

  return newArr.join(' ');
}
