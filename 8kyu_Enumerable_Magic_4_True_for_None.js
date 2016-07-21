//Challenge: https://www.codewars.com/kata/545993ee52756d98ca0010e1

function none(arr, fun){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i]) === false) {
      count += 1;
      }
    }
  if (count === arr.length) {
    return true;
    }
  else {
    return false;
    }
}
