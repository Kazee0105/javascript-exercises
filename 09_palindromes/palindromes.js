const palindromes = function (string) {
//filter only letters with regex.
let filterLet = string.toLowerCase().split('').filter(char => /[a-zA-Z0-9]/.test(char));
console.log(filterLet)

return filterLet.join('') === filterLet.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
