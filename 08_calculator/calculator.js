const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	let len = nums.length;
  let total = 0;
  for (i = 0; i < len; i++) {
    total += nums[i];
  }
  return total;
};

const multiply = function(nums) {
	let len = nums.length;
  let total = nums[0];
  for (i = 1; i < len; i++) {
    total *= nums[i];
  }
  return total;
};

const power = function(base, power) {
	let output = 0;
  
  for (i = 0; i <= power; i++) {
    output = output + (base * base);
  }
  return output;
};

const factorial = function(num) {
  let output = 1;

  for (i = 2; i <= num; i++) {
    output *= i;
  }
  return output;
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
