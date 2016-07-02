//Challenge: https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
  if  (name.charAt(0) == "R" || name.charAt(0) == "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
