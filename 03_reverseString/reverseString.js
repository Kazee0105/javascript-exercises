const reverseString = function(str) {
    let reverse = "";
    for (i = 0; i <= str.length; i++){
        reverse += str.charAt(str.length -i);
    }
    return reverse;
};

console.log(reverseString('Hello'))

// Do not edit below this line
module.exports = reverseString;
