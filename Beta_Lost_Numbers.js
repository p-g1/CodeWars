// Challenge: https://www.codewars.com/kata/54ff35b677602d7dfe000f4a

var lost = [4, 8, 15, 16, 23, 42];
function isLost(n) {
   for (var i = 0; i < lost.length; i++)
     if (lost[i] === n) {
      return true
    }
    return false
}
