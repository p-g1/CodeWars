// Challenge: https://www.codewars.com/kata/5637b03c6be7e01d99000046

function makePassword(phrase) {
 var newArr = [];
 var phrase2 = phrase.split(' ');
 for (var i = 0; i < phrase2.length; i++) {
   var x = phrase2[i].split('');
     if (x[0] === 'i' || x[0] === 'I') {
       newArr.push('1');
       }
     else if (x[0] === 'o' || x[0] === 'O') {
     newArr.push('0');
     }
     else if (x[0] === 's' || x[0] === 'S') {
     newArr.push('5');
     }
     else {
     newArr.push(x[0]);
     }
   }
   var joined = newArr.join('');
   return joined;
}
