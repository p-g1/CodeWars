// Challenge: https://www.codewars.com/kata/53a20af2e0afd3e2cd000333

var say = function(n) {
  return function(word) {
    return n + ' ' + word;
  }
}
