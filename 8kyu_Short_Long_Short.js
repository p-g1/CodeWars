// Challenge: https://www.codewars.com/kata/50654ddff44f800200000007

function solution(a, b){
  var newArr = [a, b].sort();

  var newArr2 = newArr + newArr[0];
  var final = newArr2.replace(/[',']/g, '');

  return final;
}
