//Challenge: https://www.codewars.com/kata/56414fdc6488ee99db00002c

function absentVowel(x){

  var t = x.replace(/[^aeiou]/g, '');
  var a = t.replace(/[^eiou]/g, '');
  var e = t.replace(/[^aiou]/g, '');
  var i = t.replace(/[^aeou]/g, '');
  var o = t.replace(/[^aeiu]/g, '');
  var u = t.replace(/[^aeio]/g, '');

    if (a == t) {
     return 0;
     }
   else if (e == t) {
     return 1;
     }
   else if (i == t) {
     return 2;
     }
   else if (o == t) {
     return 3;
     }
   else if (u == t) {
     return 4;
     }
  }
