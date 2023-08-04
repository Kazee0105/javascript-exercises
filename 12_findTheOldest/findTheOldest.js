const findTheOldest = function(array) {
    let thisYear = new Date().getFullYear();
    for (i = 0; i < array.length; i++){
        if(array[i].yearOfDeath === undefined){
            array[i].yearOfDeath = thisYear;
        } 
    }
    let ages = array.map((age) => age.yearOfDeath - age.yearOfBirth);
    let oldest = ages.indexOf(Math.max(...ages));

    return array[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
