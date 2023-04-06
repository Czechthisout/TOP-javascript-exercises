const sumAll = function(a,b) {
    outputSum=0;
    if(a<0 || b<0 || typeof(a) !== 'number' || typeof(b) !== 'number'){
        return 'ERROR';
    }
    if(a>b){
        for(i=b; i<=a; i++){
            outputSum+=i;
        }
        return outputSum;
    }
    else if(b>a){
        for(i=a; i<=b; i++){    
            outputSum+=i;
        }
        return outputSum;
    }
    else{
        return a;
    }    
};

// Do not edit below this line
module.exports = sumAll;
