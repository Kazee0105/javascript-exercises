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

const multiply = function() {
  let totalMulti = 1
  for (i = 0; i < arguments.length; i++){
    totalMulti *= arguments[i]
  }
return totalMulti
};

const power = function(a,b) {
	return Math.pow(a , b)
};

const factorial = function(num) {
	let total = 1;
  if(num === 0 || num === total){
    return total;
  }
  else if (num > 1){
    for(i = num; i >= 1; i-- ){
      total = total * i;
    }
    return total;
  }
};

console.log(factorial(4));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
