function loseWeight(gender, weight, duration){
console.log(gender);
  if (gender !== 'M' && gender !== 'F') return 'Invalid gender';
  if (weight < 1) return 'Invalid weight';
  if (duration <= 0) return 'Invalid duration';

  if (gender === 'M') {
    while (duration > 0) {
      weight = weight*0.985;
      duration--;
  }
 }

  else if (gender === 'F') {
    while (duration > 0) {
      weight = weight*0.988;
      duration--;
    }
  }

return Number(weight.toFixed(1));

}
