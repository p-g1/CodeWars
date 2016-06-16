function holidayCount (a1, a2) {

var newArr = [];
var newArr2 = [];

for (var i = 0; i < a1.length; i++) {
  if (a1[i] == Number(a1[i])) {
    newArr.push(a1[i]);
     }
    }
for (var j = 0; j < a1.length; j++) {
  if (a2[j] == Number(a2[j])) {
    newArr2.push(a2[j]);
     }
    }

  if (newArr.length === 0 || newArr2.length === 0) {
    return "Not possible";
  }
  else if (Number(newArr[0]) > Number(newArr2[0])) {
    return "Right";
  }
  else if (Number(newArr[0]) === Number(newArr2[0])) {
    return "Same";
  }
  else {
    return "Wrong";
  }
}
