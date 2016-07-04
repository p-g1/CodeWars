//Challenge: https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
  var t = dna.split('');
  var newArr = [];
    for (var i = 0; i < dna.length; i++) {
      if (dna[i] == 'T') {
        newArr.push('U');
        }
      else {
        newArr.push(dna[i]);
        }
      }
   var rna = newArr.join('');
  return rna;
}
