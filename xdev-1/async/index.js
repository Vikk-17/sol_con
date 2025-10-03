

// fs.readFile("./testing.txt", 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

function fileSync(filePath) {
    const fs = require("node:fs");
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(data);
    } catch (err) {
        console.log(err)
    }
}

// fileSync("./testing.txt")

async function fileReadAsync(filePath) {
    const fs = require('node:fs/promises');
    try{
        const data = await fs.readFile(filePath, {encoding: 'utf8'});
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}

fileReadAsync("./testing.txt");
