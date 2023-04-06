const reverseString = function(inputString) {
    reversedStr='';
    for(let i=1; i<=inputString.length; i++){
        reversedStr=reversedStr.concat(inputString[inputString.length-i]);
    }
    console.log(reversedStr);
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
