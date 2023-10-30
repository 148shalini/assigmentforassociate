// 1. Take a sentence as an input and reverse every word in that sentence.
// a. Example - This is a sunny day > shiT si a ynnus yad.

function reverseWordsInSentence(sentence) {
    let reversedSentence = '';
    let word = '';
    
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length - 1) {
            if (i === sentence.length - 1) {
                word += sentence[i];
            }
            let reversedWord = '';
            for (let j = word.length - 1; j >= 0; j--) {
                reversedWord += word[j];
            }
            reversedSentence += reversedWord;
            if (i !== sentence.length - 1) {
                reversedSentence += ' ';
            }
            word = '';
        } else {
            word += sentence[i];
        }
    }
    
    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);


// function sortArrayDescending(arr) {
//     const n = arr.length;
//     let swapped;
    
//     do {
//         swapped = false;
//         for (let i = 0; i < n - 1; i++) {
//             if (arr[i] < arr[i + 1]) {
//                 // Swap elements if they are in the wrong order
//                 const temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);

//     return arr;
// }

// const inputArray = [5, 2, 9, 1, 5, 6];
// const sortedArray = sortArrayDescending(inputArray);
// console.log(sortedArray);
