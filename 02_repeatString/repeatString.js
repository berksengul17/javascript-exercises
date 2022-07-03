const repeatString = function(str, repetition) {

    if(repetition < 0) return "ERROR";
    
    let newStr = "";
    for(let i=0; i<repetition; i++){
        newStr += str;
    }

    return newStr;

};

// Do not edit below this line
module.exports = repeatString;
