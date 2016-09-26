// Challenge: https://www.codewars.com/kata/52dd72494367608ac1000416

function isPrime(n) {
   if (n < 0) {
     return false;
     }
   if (n === 2 || n === 3) {
     return true;
     }
   if (n === 1) {
     return false;
     }
   if (n % 2 === 0 || n % 3 === 0) {
     return false;
     }
   else {
    for (var i = 3; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
            }
        }
        return true;
     }
  }

function getPrimes(start, finish) {
  var newArr = [];
  var a = '';
  var b = '';
  if (start > finish) {
    a = finish;
    b = start;
    }
  else {
    a = start;
    b = finish;
    }

  for (var i = a; i <= b; i++) {
    if (isPrime(i) === true) {
      newArr.push(i);
      }
      }
  return newArr;
  }
