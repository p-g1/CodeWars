// Challenge: https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd

function noonerize(numbers) {
console.log(numbers);
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] !== Number(numbers[i])) {
      return "invalid array";
      }
     }
  var str1 = numbers[0].toString();
  var str2 = numbers[1].toString();
  var number = [Number(str1.substring(0, 1) + str2.substring(1)), Number(str2.substring(0, 1) + str1.substring(1))].sort(function(a, b) {
    return a-b;
    });
console.log(number);
  return number[1] - number[0];
}
