//inputs:
// [1,2,4,4], sum = 8
//sorted inputs
//oputputs:
    // 4,4, pair
    // null


//naive solution
// duplicate the array in two arrays, in order take the first item and compare with the next item in the next array, nested loop, but that is big O(n 2) tiem,.

//sum: 8
//better solution
// {
//     1: 0,7
//     2: 1,6,
//     4: 2,4,
// }

// {
// //     7: 1
// //     6: 2,
// //     4: 4,
// }

// {
// //     70: 1
// //     60: 2,
// //     40: 4,
// //     41: 4,
// }

//sum: 7
// {
//     1: 6
//     2: 5,
//     3: 4,
//     4: 3
// }

//sum: 8
// {
//     1: 7
//     2: 6,
//     3: 5,
//     4: 4
// }

// {
//     7: true
//     6: true,
//     5: true,
//     4: true
// }

// {
//     7: 1
//     6: 2,
//     5: 3,
//     4: 4
// }

// {
//     7: {0,1}
//     6: {1,2},
//     5: {2,3},
//     4: {3,4}
// }

// {
//     7: {0,1}
//     6: {1,2},
//     4: {2,4},
// }

function getMatches(numbers: number[], sum: number): number[] {
    let dictionary: { [key: number]: number } = {};
    for (let index = 0; index < numbers.length; index++) { //O(n)
        dictionary[sum - numbers[index]] = numbers[index];
    }
    for (let index = 0; index < numbers.length; index++) {//O(n)
        if (dictionary[numbers[index]] != null) {
            return [numbers[index], dictionary[numbers[index]]];
        }
        
    }
    return [];
}


console.log(getMatches([1,2,4,4], 8));
console.log(getMatches([1,2,3,4], 7));
console.log(getMatches([1,2,3,4], 8));
