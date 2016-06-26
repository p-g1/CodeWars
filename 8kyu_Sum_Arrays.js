//Challenge: https://www.codewars.com/kata/53dc54212259ed3d4f00071c

function sum (numbers) {

    var total = 0;

    if (numbers.length < 1) {
      return 0;
      }
    else {
      for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
      }
      return total;
    }
};
