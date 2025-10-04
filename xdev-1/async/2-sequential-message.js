/*
 * Print messages with delay
 * after 1 second -> "hello"
 * after 2 more seconds -> "how are you"
 * after 3 more seconds -> "Goodbye!"
 */

// lets use callback hell first
// setTimeout(() => {
//     console.log("Hello");
//     setTimeout(() => {
//         console.log("How are you?");
//         setTimeout(()=>{
//             console.log("Goodbye!");
//         }, 5000);
//     }, 3000);
// }, 1000);

// function step3() {
//     console.log("Goodbye!");
// }
//
// function step2() {
//     console.log("How are you?");
//     setTimeout(step3, 5000)
// }
//
// function step1() {
//     console.log("Hello there");
//     setTimeout(step2, 3000);
// }
//
// setTimeout(step1, 1000);



// async function wait(ms) {
//     setTimeout(() => {
//        console.log("Hello");
//     }, 1000);
// }

// await wait();
