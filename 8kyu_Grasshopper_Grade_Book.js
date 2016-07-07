//Challenge: https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade (s1, s2, s3) {
  var x = (s1 + s2 + s3) /3;

  if (x < 60) {
    return 'F';
    }
  else if (x < 70) {
    return 'D';
    }
  else if (x < 80) {
    return 'C';
    }
  else if (x < 90) {
    return 'B';
    }
  else if (x > 90) {
    return 'A';
    }
}
