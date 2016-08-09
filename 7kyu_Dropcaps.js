// Challenge: https://www.codewars.com/kata/559e5b717dd758a3eb00005a

function dropCap(n) {

  //var low = n.toLowerCase();
  var words = n.split(" ");
  var results = [];

  for (var i = 0; i < words.length; i++) {
    if (words[i].length <= 2) {
    results.push(words[i]);
    }
    else if (words[i].length > 2) {
    var low = words[i].toLowerCase();
    var letter = low.charAt(0).toUpperCase();
    results.push(letter + low.slice(1));
    }


  }
  return results.join(" ");
}
