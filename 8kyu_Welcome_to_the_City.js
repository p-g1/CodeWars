//Challenge: https://www.codewars.com/kata/5302d846be2a9189af0001e4

function sayHello( name, city, state ) {
var fullName = name.join(' ');

return 'Hello, ' + fullName + '! Welcome to ' + city + ', ' + state + '!';
}
sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
