const repeatString = function(inputString, inputNum) {
    var longString = ''
    if(inputNum<0){
        return "ERROR";
    }
    
    for (let i=0; i<inputNum; i++){
        longString = longString.concat(inputString);
    }
    return longString;
};

// Do not edit below this line
module.exports = repeatString;
