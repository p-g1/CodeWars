// Challenge https://www.codewars.com/kata/55955a48a4e9c1a77500005a

function greet(name) {
  if (name == '') {
    return null;
    }
  else if (name == null) {
    return null;
    }
  else {
  return "hello" + ' ' + name.toString() + '!';
  }
}
