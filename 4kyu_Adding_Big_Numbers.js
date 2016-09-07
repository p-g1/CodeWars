// Challange: https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a, b) {

  var shortest = [a.length, b.length].sort(function(x, z) {
    return x-z;
    });
  var short = '';
  var long = '';
    if (shortest[0] === a.length) {
      short = a.split('');
      long = b;
      }
    else {
      short = b.split('');
      long = a;
      }

    while (short.length < long.length) {
      short.unshift('0');
      }

  var short2 = short.join('');

  var carry = 0;
  var total = '';

  for (var i = shortest[1]-1; i >= 0; i--) {
    var numA = parseInt(short2.charAt(i));
    var numB = parseInt(long.charAt(i));

     total = (numA + numB + carry) % 10 + total;
     carry = Math.floor((numA + numB + carry) / 10);
     }
     if (carry > 0) {
       total = carry + total;
       }
   var total2 = total.split('');

   for (var w = 0; w < total2.length; w++) {
     if (total2[w] === '0') {
       total = total.substring(1);
       }
     else {
       return total;
       }
      }
  }
