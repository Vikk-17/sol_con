"use strict";
const person1 = {
    name: "John Carmack",
    location: "US",
    isProgrammer: true,
};
const person2 = {
    name: "Bob",
    location: "US",
    isProgrammer: true,
};
console.log(person1);
console.log(person2);
;
const user1 = {
    name: "Alex",
    age: 24,
    isProgrammer: true,
    // work: (profile: string) {
    //     console.log(`Working as a ${profile}`);
    // }
    work: (profile) => console.log(`Working as a ${profile}`)
};
user1.work("developer");
