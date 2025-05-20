// Given an array of positive integers as input, return the maximum value in the array


function maxValue(arr: number[]) {
    let max = 0;
    for(let i = 0; i<arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// console.log(maxValue([1, 2, 3]));

// Given a list of users, filter out the users that are legal (greater than 18 years of age)
//


interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function filteredUser(users: User[]) {
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
