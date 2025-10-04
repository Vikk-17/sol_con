/*
 * Write a function that
 * 1. Reads the contents of a file 
 * 2. Trims the extra space from the left and right
 * 3. Writes it back to the file
 */

const fs = require("node:fs");
fs.readFile("./test.txt", "utf8", (err, data) => {
    if(err) {
        console.log(err);
        return ;
    } else {
        data = data.trim();
        fs.writeFile("./test.txt", data, err => {
            if(err) {
                console.log(err);
            } else {
                console.log("File has been written successfully");
            }
        })
    }
});
