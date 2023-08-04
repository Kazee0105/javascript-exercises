 const fibonacci = function(num) {
    let p = 0, c = 1, arr = [];

    if(num < 0) return "OOPS"
    for (i = 0; i < num; i++){
        if(arr.length < 2){
            arr.push(c);
        }else {
            p = arr[i - 2];
            c = arr[i - 1];
            arr.push(p + c);
        }
    }
    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
