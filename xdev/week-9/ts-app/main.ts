interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

function checkLegal(user: User) {
    return user.age > 18 ? true : false;
}


function sum(a: number, b: number): number {
    return a + b;
}

const result = sum(4, 8);
console.log(result);

function greet(firstName: string): void {
    console.log(`Howdy! ${firstName}`);
}
greet("Uncle Bob");

function isLegal(age: number): boolean {
    return age > 18 ? true : false;
}

console.log(isLegal(2)); // false
console.log(isLegal(20)); // true

function takeFunction(fn: () => void): void {
    setTimeout(fn, 1000);
}

takeFunction(function(){
    console.log("I use arch btw!");
})
