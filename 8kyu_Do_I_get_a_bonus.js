//Challenge: https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {

var total = '';

if (bonus === true) {
total = salary * 10;
}
else {
total = salary;
}

return '£' + total.toString();
}
