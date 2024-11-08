"use strict";
function sumArray(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
