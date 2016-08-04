// Challenge: https://www.codewars.com/kata/545991b4cbae2a5fda000158

function include(arr, item){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true
    }
  }
  return false
}
