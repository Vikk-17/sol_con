const { Admin } = require("../db/index.js")
// or we can use ../db => because it will directly take us to the index.js

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    // Find a matching user and if yes then send to another function 
    // using next() and if not then return some json msg;
    Admin.findOne({
        username: username,
        password: password,
    }).then((value)=>{
        if(value){
            next();
        }
        else{
            res.json({
                message: "Admin does not exist",
            })
        }
    })
}

module.exports = adminMiddleware;
