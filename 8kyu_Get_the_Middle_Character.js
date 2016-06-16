function getMiddle(s) {

  var newArr = [];

    if (s.length % 2 === 0) {
      newArr.push(s[(s.length / 2) - 1] + s[s.length / 2]);
    }
    else {
      newArr.push(s[Math.floor(s.length / 2)]);
    }
    var newestArr = newArr.toString();
  return newestArr;
}
