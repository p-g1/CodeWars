//Challenge: https://www.codewars.com/kata/54599705cbae2aa60b0011a4

function one(arr, fun){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i]) === true) {
      count += 1;
      }
    }
  if (count === 1) {
    return true;
    }
  else {
    return false;
    }
}
