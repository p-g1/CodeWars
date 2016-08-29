// Challenge: https://www.codewars.com/kata/55aa7acc42216b3dd6000022

function owlPic(text){
  var z = text.toUpperCase();
  var x = z.replace(/[^8WTYUIOAHXVM]/g, '');
  var c = "\'\'0v0\'\'";
  return x + c + x.split('').reverse().join('');
}
