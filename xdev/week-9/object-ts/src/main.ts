interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
}

const person1: Person = {
    name: "John Carmack",
    location: "US",
    isProgrammer: true,
}

const person2: Person = {
    name: "Bob",
    location: "US",
    isProgrammer: true,
}

console.log(person1);
console.log(person2);


interface User {
    name: string;
    age: number;
    isProgrammer: boolean;
    work(profile: string): void;
};

const user1: User = {
    name: "Alex",
    age: 24,
    isProgrammer: true,
    // work: (profile: string) {
    //     console.log(`Working as a ${profile}`);
    // }
    work : (profile: string) => console.log(`Working as a ${profile}`)
}
user1.work("developer");
