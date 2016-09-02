// Challenge: https://www.codewars.com/kata/56b8903933dbe5831e000c76

function spoonerize(words) {
   var newArr = [];
    var w = words.split(' ');
    var first = w[0].slice(0, 1);
    var second = w[1].slice(0, 1);
    var firstEnd = second + w[0].substring(1);
    var secondEnd = first + w[1].substring(1);

    return firstEnd + ' ' + secondEnd;
}
