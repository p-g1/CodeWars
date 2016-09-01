// Challenge: https://www.codewars.com/kata/56f5594a575d7d3c0e000ea0

function conferencePicker (citiesVisited, citiesOffered) {
  var count = 0;
  console.log(citiesVisited, citiesOffered);
  var len = citiesOffered.length;
  for (var i = 0; i < citiesOffered.length; i++) {
    if(citiesVisited.indexOf(citiesOffered[i]) !== -1) {
        citiesOffered.shift();
        i--;
        count +=1;
        if (count === len) {
          return 'No worthwhile conferences this year!';
          }
        }

    else {
          return citiesOffered[i];
          }
        }
}
