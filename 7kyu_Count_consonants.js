//Challenge: https://www.codewars.com/kata/564e7fc20f0b53eb02000106

function consonantCount(str) {
  return str.replace(/[aeiouAEIOU ^$&#0-9_]/g, '').length;
}
