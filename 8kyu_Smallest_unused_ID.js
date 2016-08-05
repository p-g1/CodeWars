// Challenge: https://www.codewars.com/kata/55eea63119278d571d00006a

function nextId(ids){
  var x = ids[1] - ids[0];

  for (var i = 0; i < ids.length; i++) {
    if (ids[i] + x !== ids[i+1]) {
      return ids[i]+x;
  }
  }
}
