// Challenge: https://www.codewars.com/kata/55a891dfaf48a4d93000008a

var average = (n) => {
var total = 0;
  if (n === n.toString()) {
    return 'Incorrect';
    }
  else {
     for (var i = 0; i<n.length; i++) {
       if (n[i] === Number(n[i])) {
         total += n[i];
         }
       }
  }

  return total / n.length;
}
