//Challenge: https://www.codewars.com/kata/55d277882e139d0b6000005d

var findAverage = function (nums) {
  var total = 0;

  for(var i=0; i<nums.length; i++) {
    total += nums[i];
  }
  return total/nums.length;
}
