// Challenge: https://www.codewars.com/kata/5681bc8d17af37f50e000015

function primes(start, finish){
console.log(start);
console.log(finish);
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

  for (var i = start; i <= finish; i++) {
    if (isPrime(i) === true) {
      newArr.push(i);
      }
      }
    if (newArr.length === 0) {
      return null;
      }
    else {
         console.log('yes');
  return newArr;
  }
  }
  
