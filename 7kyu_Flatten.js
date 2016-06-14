var flatten = function (array){
  var flat = [].concat.apply([], array);
  return flat;
 }
