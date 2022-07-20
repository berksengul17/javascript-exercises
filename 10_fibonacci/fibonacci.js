const fibonacci = function(target) {
    if(target < 0){
        return "OOPS";
    }

    if(target == 1 || target == 2){
        return 1;
    }

    let first = 1;
    let second = 1;

    for(let i=3; i<=target; i++){
        temp = first;
        first = second;
        second += temp;
    }

    return second;
};

// Do not edit below this line
module.exports = fibonacci;
