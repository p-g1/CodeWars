// Challenge: https://www.codewars.com/kata/533c46b140aafec05b000d31

function translate(sentence) {
  console.log(sentence);
	  var result = [];
    var str = sentence.split(' ');

  for (var i = 0; i < str.length; i++) {

  var str2 = str[i].replace(/[!?.,_]/g,'');
  var punc = str[i].replace(/[^!?.,_]/g,'');

  if (/[aeiouAEIOU]/.test(str2[0])) {
     result.push(str2 + 'way' + punc);

  } else if (/[aeiou]/.test(str2[1])) {

     var cap = str2.substring(1, 2).toUpperCase();
     var small = str2.substring(1, 2);
     var backEnd2 = str2.substring(2);
     var letter = str2.substring(0, 1).toLowerCase();

      if (str2[0] == str2[0].toUpperCase()) {
       result.push(cap + backEnd2 + letter + 'ay' + punc);
        }
      else {
       result.push(small + backEnd2 + letter + 'ay' + punc);
       }

  } else {

     var backEnd = str2.substring(3);
     var letter2 = str2.substring(1, 2);
     var firstLetter = str2.substring(0, 1).toLowerCase();
     var cap2 = str2.substring(2, 3).toUpperCase();
     var small2 = str2.substring(2, 3);

      if (str2[0] == str2[0].toUpperCase()) {
       result.push(cap2 + backEnd + firstLetter + letter2 + 'ay' + punc);
        }
      else {
       result.push(small2 + backEnd + firstLetter + letter2 + 'ay' + punc);
       }
    }
  }
  return result.join(' ');
}
