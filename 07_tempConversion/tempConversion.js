const convertToCelsius = function(far) {
  let convert = (far - 32) * (5/9) 
  let toNum = convert % 1 ? parseFloat(convert).toFixed(1) : convert;
  console.log(typeof toNum)
return toNum;
};

const convertToFahrenheit = function(cel) {
  let convert = cel * (9/5) + 32;
  console.log(typeof convert)
  return convert % 1 ? parseFloat(convert).toFixed(1) : convert;
};


console.log(convertToCelsius(100));
console.log(convertToFahrenheit(73.2));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
