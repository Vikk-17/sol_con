function sum(a, b) {
    return a + b;
}
var result = sum(4, 8);
console.log(result);
function greet(firstName) {
    console.log("Howdy! ".concat(firstName));
}
greet("Uncle Bob");
function isLegal(age) {
    return age > 18 ? true : false;
}
console.log(isLegal(2)); // false
console.log(isLegal(20)); // true
function takeFunction(fn) {
    setTimeout(fn, 1000);
}
takeFunction(function () {
    console.log("I use arch btw!");
});
