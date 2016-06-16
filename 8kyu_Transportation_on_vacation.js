function rentalCarCost(d) {
  var t = d * 40;

  if (d < 3) {
    return t;
    }
    else if (d >= 3 && d < 7) {
    return t - 20;
    }
    else {
    return t - 50;
    }
}
