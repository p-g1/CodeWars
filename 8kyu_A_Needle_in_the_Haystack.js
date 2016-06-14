function findNeedle(haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
      break;
  }
 }
}
