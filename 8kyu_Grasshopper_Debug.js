//Challenge: https://www.codewars.com/kata/55cb854deb36f11f130000e1

function weatherInfo(temperature){
var c = (temperature - 32 )*(5/9)
if (c < 0){
    return (c + " is freezing temperature")}
  else
    {return (c + " is above freezing temperature")}
    }
