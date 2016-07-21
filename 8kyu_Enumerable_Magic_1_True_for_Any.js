//Challenge: https://www.codewars.com/kata/54598e89cbae2ac001001135

function any(arr, fun){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i]) === true) {
      count += 1;
      }
    }
  if (count > 0) {
    return true;
    }
  else {
    return false;
    }
}
