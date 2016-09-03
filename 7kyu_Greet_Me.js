// Challenge: https://www.codewars.com/kata/535474308bb336c9980006f2

var greet = function(name) {
  var name2 = name.toLowerCase();
  var cap = name2.substring(0, 1).toUpperCase();

  return 'Hello ' + cap + name2.substring(1) + '!';
};
