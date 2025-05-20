"use strict";
// Given an array of positive integers as input, return the maximum value in the array
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
function filteredUser(users) {
    return users.filter(x => x.age >= 18);
}
console.log(filteredUser([{
        firstName: "John",
        lastName: "Carmack",
        age: 54,
    }, {
        firstName: "Robert",
        lastName: "Peterson",
        age: 60
    },]));
