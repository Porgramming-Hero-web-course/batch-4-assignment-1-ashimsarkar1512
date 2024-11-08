"use strict";
function countWordOccurrences(sentence, word) {
    const lowerCaseSentance = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const words = lowerCaseSentance.split(" ");
    return words.filter(w => w === lowerCaseWord).length;
}
const result3 = countWordOccurrences("I love typescript", "typescript");
console.log(result3);
