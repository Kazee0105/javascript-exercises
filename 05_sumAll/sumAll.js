const sumAll = function(a,b) {
    let sum = 0;
    if(typeof a !== typeof b) return "ERROR";
    if(a < 0 || b < 0) return "ERROR";

    if(a > b){
        let temp = a;
        a = b;
        b = temp;
    }
    for(i = a; i <= b; i++){
        sum += i;
    }
    return sum;
}

console.log(sumAll(123, 1));
// Do not edit below this line
module.exports = sumAll;
