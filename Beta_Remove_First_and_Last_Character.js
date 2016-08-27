// Challange: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str){
 var x = str.split('');
 x.pop();
 x.shift();
 var t = x.join('');
 return t;

};
