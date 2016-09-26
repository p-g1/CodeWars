// Challenge: https://www.codewars.com/kata/559d7951ce5e0da654000073

function alternateSqSum(arr){
  // happy coding :D
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    if(i % 2 !== 0) {
      total += arr[i] * arr [i];
    } else {
      total += arr[i];
    }
  }
    return total;
}
