// CHallenge: https://www.codewars.com/kata/568ff914fc7a40a18500005c

function distancesFromAverage(arr){
  var total = 0;
  var average = 0;
  var newArr = [];

  for (var i=0; i<arr.length; i++) {
    total += arr[i];
    }
    average = total / arr.length;

  for (var j = 0; j< arr.length; j++) {
    var x = average - arr[j];
    newArr.push(Number(x.toFixed(2)));
    }

    return newArr;
}
