var doWork = function(hours = 8) {
  for (var i=0; i< hours; i++) {
    console.log("Doing work " + i);
  }
}

doWork(5);
doWork();

let add = function (number1, number2 = 10) {
  return number1 + number2;
};

console.log(add(1));

// value gets assigned only in case the value is undefined
var displayName = function(name = "Prasad") {
  console.log(name);
}
displayName();
displayName(undefined);
displayName("");
displayName(null);