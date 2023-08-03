const convertToCelsius = function(far) {
  let convert = (far - 32) * (5/9) 
  let toF = convert % 1 ? parseFloat(convert).toFixed(1) : convert;
return parseFloat(toF);
};

const convertToFahrenheit = function(cel) {
  let convert = cel * (9/5) + 32;
  let toC = convert % 1 ? parseFloat(convert).toFixed(1) : convert;
  return parseFloat(toC)
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
