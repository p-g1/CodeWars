// Challenge: https://www.codewars.com/kata/56fcfad9c7e1fa2472000034

function evil(n) {

  var total = 0;
  var x = n.toString(2).split('');

    for (var i = 0; i < x.length; i++) {
      if (x[i] === '1') {
        total++;
       }
     }

    if (!(total % 2)) {
      return "It's Evil!";
       }
    else {
      return "It's Odious!";
      }
  }
