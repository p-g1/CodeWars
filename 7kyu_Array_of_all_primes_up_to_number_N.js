// Challenge: https://www.codewars.com/kata/56ce75f63ae564179200211c

function primeArray(n) {

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
  var newArr = [];

  for (var i = 0; i <= n; i++) {
    if (isPrime(i) === true) {
      newArr.push(i);
       }
      }
  return newArr;
  } 
