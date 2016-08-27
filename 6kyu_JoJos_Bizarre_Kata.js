// Challenge: https://www.codewars.com/kata/55327e12f5363713200000e4


var regex=/regex/ //your regex here or...

function isJojo(name) {
  var x = name.split(' ');
  if (x.length = 2) {
    var a = x[0].split('');
    var b = x[1].split('');
    if (a[0] === "J" && a[1] ==="o" && b[0] === "J" && b[1] ==="o") {
      return true;
      }
    else if (a[0] === "J" && a[1] ==="o" && b[b.length-2] === "j" && b[b.length-1] ==="o") {
      return true;
    }
    else if (a[0] === "G" && a[1] ==="i" && a[2] ==="o" && b[0] === "G" && b[1] ==="i" && b[2] ==="o") {
      return true;
    }
    }
  else {
    return false;
    }
}
