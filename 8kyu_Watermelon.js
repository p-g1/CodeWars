// Challenge: https://www.codewars.com/kata/55192f4ecd82ff826900089e

function divide(weight){
  if (weight === 2 ) {
    return false;
  } else if (weight % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
