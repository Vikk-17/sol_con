// function setTimeOutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// function callback() {
//     console.log("3 Seconds have passed");
// }
//
// setTimeOutPromisified(3000).then(callback)

// The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. 
// let promise = new Promise(function(resolve, reject) {
//     // the function is executed automatically when the promise is constructed
//     // after 1 second signal that the job is done with the result "done"
//     setTimeout(() => resolve("done"), 1000);
// });

// let promise = new Promise((data, err) => {
//     setTimeout(() => console.log("hi"), 3000);
// })

// function hiAfterSec() {
//     return new Promise(resolve => setTimeout(() => {
//        console.log("Check");
//     }, 3000));
// }
// hiAfterSec()

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    }, 3000);
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
