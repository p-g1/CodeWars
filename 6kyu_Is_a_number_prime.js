// Challenge: https://www.codewars.com/kata/5262119038c0985a5b00029f

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
