// Challenge: https://www.codewars.com/kata/5702f077e55d30a7af000115

function countName(anArr, name){

var count = 0;

for (var i = 0; i<anArr.length; i++) {
  if (anArr[i] == name) {
    count++;
    }
  }
  return count;
};
