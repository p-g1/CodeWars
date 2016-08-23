// Challenge: https://www.codewars.com/kata/54dba07f03e88a4cec000caf

function Dog (breed) {
  this.breed = breed;
  this.bark = function() {
  return "Woof";
};
}

var snoopy = new Dog("Beagle");



var scoobydoo = new Dog("Great Dane");
