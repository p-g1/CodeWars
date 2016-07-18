//Challenge: https://www.codewars.com/kata/54598d1fcbae2ae05200112c

function all( arr, fun ){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i]) === true) {
      count += 1;
      }
     }
   if (count == arr.length) {
   return true;
   }
   else {
   return false;
   }
}
