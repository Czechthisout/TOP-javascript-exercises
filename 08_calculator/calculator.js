const add = function(x,y) {
	let ans=x+y;
  return ans;
};

const subtract = function(x,y) {
	let ans=x-y;
  return ans;
};

const sum = function(arr) {
	let ans=0;
  for(let i=0; i<arr.length;i++){
    ans+=arr[i];
  }
  return ans;
};

const multiply = function(arr) {
  let ans = 1;
  for (let i = 0; i < arr.length; i++) {
    ans *= arr[i];
  }
  return ans;
};

const power = function(x,y) {
	let ans = 1;
  for (let i = 0; i < y; i++) {
    ans *= x;
  }
  return ans;
};

const factorial = function(x) {
	let ans = 1;
  for (let i = 0; i < x; i++) {
    ans *= (x-i);
  }
  return ans;
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
