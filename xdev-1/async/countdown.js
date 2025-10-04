function countdown(num, callback) {
    if(num > 0) {
        console.log(num);
        countdown(num - 1, callback);
    } else {
        callback();
    }
}

countdown(3, function() {
    console.log("GO");
})
