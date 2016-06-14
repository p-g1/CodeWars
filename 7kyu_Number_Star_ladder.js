function pattern(n){
  var output = [];
  var final = ["1\n"];

  for (var i = 1; i <= n; i++) {
    output.push(i);
  }

  for (var x = 1; x < output.length-1; x++) {
    final.push('1' + Array(output[x]).join("*") + output[x] + "\n");
  }

  final.push('1' + Array(output.length).join("*") + output.length);

  var finalist = final.join();
  finalist = finalist.replace(/[,]+/g, '');
  return finalist;
}
