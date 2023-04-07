// function boooo(n) {
//     for (let i = 0; i < n.length; i++) { 
//         console.log('booooo'); // space complexity: O(1), because it is not adding anything to the memory
//     }
// }

// boooo([1, 2, 3, 4, 5]);

// //create a function where it will receive an array. It will create an internal array variable. I will loop through the array and push the 'hi' into the internal array. I will return the internal array.
// function arrayOfHiNTimes(n) {
//     let hiArray = []; //space complexity: O(n), because it is adding n items to the memory
//     for (let i = 0; i < n; i++) {
//         hiArray[i] = 'hi';
//     }
//     return hiArray;
// }

// var arrayResult = arrayOfHiNTimes(6);

// console.log(arrayResult);

//get the most recent tweet and the older recent tweet.
// let tweets = ["This is my first tweet.", 
//               "Just had a great lunch with my friends!",
//               "Feeling excited to start my new project.",
//               "I can't believe it's already April!",
//               "Watching my favorite movie for the hundredth time."];


// tweets[0]; //O(1)
// tweets[tweets.length-1];    //O(1)

let tweets = [
    {
        tweet: "This is my first tweet.",
        date: 2012
    },
    {
        tweet: "Just had a great lunch with my friends!",
        date: 2014
    },
    {
        tweet: "Feeling excited to start my new project.",
        date: 2018
    },
]

tweets[0]; //O(1)
tweets[tweets.length-1];    //O(1)