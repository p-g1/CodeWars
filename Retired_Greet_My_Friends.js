// Challenge: https://www.codewars.com/kata/543444e97abffa54260003ac

function greetingForAllFriends(friends){
var newArr = [];
  if (friends == null || friends.length === 0) {
    return null;
    }
  else {
    for (var i=0; i<friends.length;i++) {
      newArr.push('Hello, ' + friends[i] + '!');
      }
    }
    return newArr;
 }
