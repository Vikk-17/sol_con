"use strict";
// Given an array of positive integers as input, return the maximum value in the array
function maxValue(arr) {
    var maximum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maximum < arr[i]) {
            maximum = arr[i];
        }
    }
    return maximum;
}
// console.log(maxValue([1, 2, 3]));
