// Challenge: https://www.codewars.com/kata/disaster-at-the-dog-show/javascript

function dogChecker(dog) {
 if (dog.body == "long" && dog.coat == "short" && dog.ears == "long") {
   return "Dachshund";
   }
 else if (dog.coat == "short" && dog.body == "short" && dog.ears == "short") {
   return "Chihuahua";
   }
 else if (dog.coat == "long" && dog.body == "short" && dog.ears == "long") {
   return "Shih Tzu";
   }
 else {
   return "Let's get someone else to check";
   }
}
