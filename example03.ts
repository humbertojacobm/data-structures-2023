
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

var checkIfArraysHaveMatches = (firstArray: number[], secondArray: number[]): boolean => {

    const firstHashTable: { [key: number]: number } = {};
    const secondHashTable: { [key: number]: number } = {};

    for (let index in firstArray) { //O (n)
        firstHashTable[firstArray[index]] = firstArray[index];
    }

    for (let index in secondArray) { //O (n)
        secondHashTable[secondArray[index]] = secondArray[index];
    }

    if (checkIfArraysAreMatching(secondArray, firstArray)) {
        return false;
    }

    let firstValue: number = getFirstValue(secondArray, firstArray);
    let lastValue: number = getLastValue(secondArray, firstArray);

    for (let index = firstValue; index <= lastValue; index++) { //O (n)
        if (firstHashTable[index] && secondHashTable[index]) {
            return true;
        }
    }
    return false;
}

console.log(checkIfArraysHaveMatches([1, 2, 3].sort((a: number, b: number) => a - b), [4, 5, 6])); // false
console.log(checkIfArraysHaveMatches([1, 2, 3], [2, 3, 4])); // true
console.log(checkIfArraysHaveMatches([1, 2, 3], [2, 4, 5])); // true

function getLastValue(secondArray: number[], firstArray: number[]): number {
    let lastValue: number
    if (secondArray[secondArray.length - 1] > firstArray[firstArray.length - 1]) {
        lastValue = firstArray[firstArray.length - 1];
    } else {
        lastValue = secondArray[secondArray.length - 1];
    }
    return lastValue;
}

function getFirstValue(secondArray: number[], firstArray: number[]): number {
    let firstValue: number;
    if (secondArray[0] < firstArray[0]) {
        firstValue = firstArray[0];
    } else {
        firstValue = secondArray[0];
    }
    return firstValue;
}

function checkIfArraysAreMatching(secondArray: number[], firstArray: number[]): boolean {
    return secondArray[0] > firstArray[firstArray.length - 1] ||
        secondArray[secondArray.length - 1] < firstArray[0]
        ;
}

