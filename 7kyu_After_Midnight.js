// Challenge: https://www.codewars.com/kata/56fac4cfda8ca6ec0f001746

function dayAndTime(n) {
console.log(n);

    var day = '';
    var days =  Math.floor((Math.floor(n / 1440)) % 7);
    var dleft = n % 1440;
    var hours = Math.floor(dleft / 60);
    var min = (dleft % 60);
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var initialHours = 0;

    if (n >= 0) {
      initialHours = hours;
      day = week[days];
      return day + ' ' + (initialHours < 10 ? '0'+ initialHours: initialHours) + ':' + (min < 10 ? '0'+ min: min);
     }

    else if (n < 0) {
      initialHours = 24 + hours;
      day = week[(week.length-1) + days];
      if (min !== 0) {
        var mins = 60 + min;
        }
      else {
        mins = min;
        }
      return day + ' ' + (initialHours < 10 ? '0'+ initialHours: initialHours) + ':' + (mins < 10 ? '0'+ mins: mins);
     }

    }
