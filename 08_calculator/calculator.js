const add = function(a,b) {
  return a + b	
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
	let total = 0;
  for(i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
};

const multiply = function(a,b) {
  return a * b
};

const power = function() {
	
};

const factorial = function() {
	
};

console.log(sum([7,11]));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
