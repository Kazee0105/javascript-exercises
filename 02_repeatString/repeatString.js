const repeatString = function(str, num) {
    let repeat = ""
    if(num>0){
        for(i=0;i<num;i++){
            repeat += str;
        }
    }
    else if(num === 0){
        return ""
    }
    else{
        return 'ERROR'
    }
    return repeat;
};

console.log(repeatString('hey',0));

// Do not edit below this line
module.exports = repeatString;
