// need to install readline-sync module
const readline = require("readline-sync");

function enterNumber() {
    let a = Number(readline.question());
    let number = [];
    for(let i = 0; i<a; ++i) {
        number.push(Number(readline.question()));
    }
    console.log(number);
}

enterNumber();

function sum(n) {
    let ans = 0;
    for(let i = 1; i<=n; i++) {
        ans = ans + i;
    }
    return ans;
}

const ans = sum(100);
console.log(ans);
