// Challenge: https://www.codewars.com/kata/55b2697e5b75acb77d000077

// that function must return true for a prime number and false
// to any other number
function checkPrime(n){
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
