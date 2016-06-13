function removeSmallest(numbers) {
  var low = numbers[0];
 if (numbers.length < 2) return [];
 for (var i = 1; i < numbers.length; i++) if (numbers[i] < low) low = numbers[i];
 for (var i = 0; i < numbers.length; i++) if (numbers[i] === low) {
       numbers.splice(i, 1);
       break;
}
 return numbers;
}
