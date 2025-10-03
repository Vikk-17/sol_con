// write a function wait(ms) that returns a Promise which resolves after ms milliseconds

// async function wait(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("It has been resolved"); 
//             resolve("Done");
//         }, ms);
//     })
// }
//

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// lets use async function to test it
async function test() {
    console.log("Waiting...");
    await wait(2000);
    console.log("2 seconds passed");
}
// const p = await wait(2000);
// console.log("2 seconds passed");
test();
