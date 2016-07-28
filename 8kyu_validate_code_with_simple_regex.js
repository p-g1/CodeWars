// Challenge: https://www.codewars.com/kata/56a25ba95df27b7743000016

function validateCode (code) {
var x = code.toString().split('');

if (Number(x[0]) === 1 || Number(x[0]) === 2 || Number(x[0]) === 3) {
  return true;
  }
else {
  return false;
  }
}
