const { User } = require("../db")

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    User.findOne({
      username: username,
      password: password,
    })
    .then(function(value){
      if(value){
        next();
      } else {
          res.status(403).json({
            msg: "User does not exist",
        });
      }
    })
}

module.exports = userMiddleware;
