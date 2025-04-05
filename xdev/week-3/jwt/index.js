const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "htb";
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb+srv://admin-souvik:test123@cluster0.r0k4t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri)


const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

// middleware
app.use(express.json())

// create in memory users
const all_users = [
    {
        username: "abc@gmail.com",
        password: "12345",
        name: "abc",
    },
    {
        username: "xyz@gmail.com",
        password: "xyz",
        name: "xyz",
    },
    {
        username: "pqr@gmail.com",
        password: "4567",
        name: "pqr",
    }
];


// function to check wheather the exist 
function userExist(username, password){
    let exist = false;
    for(let i = 0; i<all_users.length; i++){
        if(all_users[i].username == username && all_users[i].password == password){
            exist = true;
            break;
        }
    }
    return exist;
}

// Post /signin 
// returns a json web token with username and password encrypted
app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username, password)){
        return res.status(403).json({
            msg: "User is not found",
        });
    }
    const token = jwt.sign({
        username: username,
        password: password,
    }, jwtPassword);

    return res.json({
        token,
    });
});

// Get /users
// Returns an array of all users if a user is signin(token in correct)
// or else return 403 status code
app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        const password = decoded.password;
        res.json({
            username: username,
            password: password,
        })
    }
    catch(err){
        return res.status(403).json({
            msg: "Can't get",
        })
    }
});

app.get("/", (req, res) =>{
    res.send("Working");
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});
