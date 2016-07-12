//Challenge: https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
  var total = 0;

  for (var i = 0; i < classPoints.length; i++) {
    total += classPoints[i];
    }

  total = total / classPoints.length;

  if (yourPoints > total) {
    return true;
    }
  else {
    return false;
    }
  return total;
}
