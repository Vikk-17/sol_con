function doubleNumber(num) {
    return new Promise((resolve, reject) => {
        if(typeof num !== "number") {
            reject("Error: not a number");
        } else {
            resolve(num * 2);
        }
    });
}

doubleNumber(5)
.then(result => console.log("Doubled value is: ", result))
.catch(err => console.log(err));

doubleNumber("abc")
.then(result => console.log("Doubled value is: ", result))
.catch(err => console.log(err));


