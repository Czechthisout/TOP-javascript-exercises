const convertToCelsius = function(inputF) {
  let outputC = (inputF - 32)*(5/9);
  outputC=Math.round(outputC*10)/10;
  return outputC;
};

const convertToFahrenheit = function(inputC) {
  let outputF = inputC*(9/5)+32;
  outputF=Math.round(outputF*10)/10;
  return outputF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
