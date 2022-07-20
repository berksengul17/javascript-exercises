const palindromes = function (str) {
    let forwards = [];
    let backwards = [];

    for(let chr of str){
        if(chr.toLowerCase() !== chr.toUpperCase()){
            forwards.push(chr);
        }
    }

    for(let i=str.length; i>=0; i--){
        if(str.charAt(i).toLowerCase() !== str.charAt(i).toUpperCase()){
            backwards.push(str.charAt(i));
        }
    }

    return arraysMatch(forwards, backwards);

};

var arraysMatch = function (arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i].toLowerCase() !== arr2[i].toLowerCase()) return false;
	}

	// Otherwise, return true
	return true;

};

// Do not edit below this line
module.exports = palindromes;
