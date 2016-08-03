// Challenge: https://www.codewars.com/kata/524f5125ad9c12894e00003f

function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  if (a === 0 || b === 0){
    return NaN;
  } else if (a > b) {
    return a%b;
  } else {
    return b%a;
  }
}
