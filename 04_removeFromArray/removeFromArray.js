const removeFromArray = function(inputArray, ...itemDel) {
    let outputArray = [];

    inputArray.forEach(item => {
        if (!itemDel.includes(item)){
        outputArray.push(item);
        }
    }) 
    return outputArray;
}

// Do not edit below this line
module.exports = removeFromArray;
