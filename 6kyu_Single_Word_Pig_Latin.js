// Challenge: https://www.codewars.com/kata/558878ab7591c911a4000007

function pigLatin(str2){

var firstVowel= 20;
  var str = str2.toLowerCase();
  var result = '';

  var spli = str2.split('');
  for (var i = 0; i < spli.length; i++) {
    if (spli[i] == Number(spli[i])) {
      return null;
      }
    else {

  if (/[aeiou]/.test(str[0])) {
     result = str + 'way';

  } else if (/[aeiou]/.test(str[1])) {

     var backEnd2 = str.substring(1);
     var letter = str.substring(0, 1);

     result = backEnd2 + letter + 'ay';

  } else if (/[htrylpmnwc]/.test(str[1]) && /[aeiou]/.test(str[2])) {

     var backEnd = str.substring(2);
     var letters = str.substring(0, 2);

     result = backEnd + letters + 'ay';
  }

  else if (/[aeiou]/.test(str[1+i])) {
    firstVowel = 1+i;
    var consonants = str.substring(firstVowel);
    var word = str.substring(0, firstVowel);
    result = consonants + word + 'ay';
    break;
    }

 }
 }
  return result;
}
