// do math in sequence

function add(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

add(2, 3, (res)=>{
    console.log("First result: ", res);
    add(res, 5, (result)=> {
        console.log("Second result: ", result);
    })
})
