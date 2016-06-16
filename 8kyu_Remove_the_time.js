function shortenToDate(longDate) {
  var date = longDate.split(" ");
  var ndate = date.pop();

  date = date.join(' ');
  date = date.replace(/,/g, "");
  //date.toString();

  return date;
}
