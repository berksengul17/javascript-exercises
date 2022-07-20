const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let total = 0;
  for(let i of arr){
    total += i;
  }

  return total;
};

const multiply = function(arr) {
  let total = 1;
  for(let i of arr){
    total *= i;
  }

  return total;
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
  let total = 1;

  if(a != 0){
    for(let i=a; i>=1; i--){
      total *= i;
    }
  }

  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
