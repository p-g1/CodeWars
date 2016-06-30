//Challenge: https://www.codewars.com/kata/55edaba99da3a9c84000003b

function divisibleBy(numbers, divisor){
    var newArr = [];
    for (var i = 0; i<numbers.length; i++){
      if(numbers[i]%divisor===0){
        newArr.push(numbers[i]);
      }
    }
    return newArr;
}
