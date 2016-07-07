//Challenge: https://www.codewars.com/kata/55902c5eaa8069a5b4000083

function formatMoney(amount){
  var change = amount.toFixed(2).toString();
  var newArr = change.split('');
    newArr.unshift('$');
  var newestArr = newArr.join('');
  return newestArr;
}
