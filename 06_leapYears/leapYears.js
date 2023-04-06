//- use an `if` statement and `&&` to make sure all the conditions are met properly

const leapYears = function(inputYear) {
    if (inputYear%4===0 && (inputYear % 100 !== 0 || inputYear % 400 === 0)){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
