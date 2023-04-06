const palindromes = function (inputString) {
    let cleanStr = inputString.replace(/[^a-z0-9]+/gi, "").toLowerCase();

    left=0;
    right=cleanStr.length-1;
    while(left<right){
        if (cleanStr[left]===cleanStr[right]){
            left++;
            right--;
        }
        else{
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
