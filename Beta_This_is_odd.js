// Challenge: https://www.codewars.com/kata/554003323fd6af1c4200004e

function isOdd(n) {
  if (n < 0) {
    if (n === Math.floor(n) && n % 2 !== 0) {
      return true;
  }
    else {
      return false;
  }
  }
  else if (Math.floor(n) % 2 !== 0) {
    return true;
    }
  else {
  return false;
  }

}

isOdd(5);
