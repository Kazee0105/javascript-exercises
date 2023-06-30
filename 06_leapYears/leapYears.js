const leapYears = function(year) {
    //Rule: years divisible by 4 are true (1984, 2004)
    //Rule: years divisible by 100 are false (1800, 1900)
    //Rule: years divisible by 400 are true (1600, 2000)
    if (year % 4 !== 0) return false;
    if (year % 100 === 0 && year % 400 !== 0) return false;
    if (year % 4 === 0) return true;
    if (year % 400 === 0 && year % 100 === 0) return true;



};

console.log(leapYears(1984)); //True Divisible by 4
console.log(leapYears(1800)); //False Divisible by 100 and ! 400
console.log(leapYears(2000)); //True Divisible by 100 and 400
console.log(leapYears(1985)); //False Divisible !4

// Do not edit below this line
module.exports = leapYears;
