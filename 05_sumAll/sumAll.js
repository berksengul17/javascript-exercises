const sumAll = function(start, end) {
    
    let isNumber = typeof start == "number" && typeof end == "number";
    let isPositive = start >=0 && end >= 0;

    if(isNumber && isPositive){

        if(start > end){
            let temp = end;
            end = start; 
            start = temp;
        }

        let numOfNumbers = end - start + 1;
        let middleNum = (end + start) / 2;
    
        return numOfNumbers * middleNum;
    }

    return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
