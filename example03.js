//give me 2 arrays..
//we need to return if they have some matces.
//  1,2,3
//         4,5,6
// 1,2,3
//     3,4,5        
// 1,2,        7
//     3,4,5,  7
// 1,2,        7, 8
//     3,4,5,  7
var checkIfArraysHaveMatches = function (firstArray, secondArray) {
    var firstHashTable = {};
    var secondHashTable = {};
    for (var index in firstArray) { //O (n)
        firstHashTable[firstArray[index]] = firstArray[index];
    }
    for (var index in secondArray) { //O (n)
        secondHashTable[secondArray[index]] = secondArray[index];
    }
    if (checkIfArraysAreMatching(secondArray, firstArray)) {
        return false;
    }
    var firstValue = getFirstValue(secondArray, firstArray);
    var lastValue = getLastValue(secondArray, firstArray);
    for (var index = firstValue; index <= lastValue; index++) { //O (n)
        if (firstHashTable[index] && secondHashTable[index]) {
            return true;
        }
    }
    return false;
};
console.log(checkIfArraysHaveMatches([1, 2, 3].sort(function (a, b) { return a - b; }), [4, 5, 6])); // false
console.log(checkIfArraysHaveMatches([1, 2, 3], [2, 3, 4])); // true
console.log(checkIfArraysHaveMatches([1, 2, 3], [2, 4, 5])); // true
function getLastValue(secondArray, firstArray) {
    var lastValue;
    if (secondArray[secondArray.length - 1] > firstArray[firstArray.length - 1]) {
        lastValue = firstArray[firstArray.length - 1];
    }
    else {
        lastValue = secondArray[secondArray.length - 1];
    }
    return lastValue;
}
function getFirstValue(secondArray, firstArray) {
    var firstValue;
    if (secondArray[0] < firstArray[0]) {
        firstValue = firstArray[0];
    }
    else {
        firstValue = secondArray[0];
    }
    return firstValue;
}
function checkIfArraysAreMatching(secondArray, firstArray) {
    return secondArray[0] > firstArray[firstArray.length - 1] ||
        secondArray[secondArray.length - 1] < firstArray[0];
}
