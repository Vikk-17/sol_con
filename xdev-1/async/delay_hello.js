// Say hello after delay

// function sayHello(name, callback) {
//     setTimeout(() => {
//         console.log("Hello " + name);
//         callback();
//     }, 2000); 
// }
//
// sayHello("test", ()=>{
//     console.log("This is the callback running after hello");
// })
//

function sayHello(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello: " + name);
        }, 2000);
    });
}

sayHello("alex")
.then(msg => console.log(msg));
