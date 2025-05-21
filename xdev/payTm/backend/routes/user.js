const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// zod schema validator
// const UserValidation = z.object({
//     username: z.string({
//         required_error: "Username is required"
//     })
//     .email()
//     .min(3, {message: "Must be 3 or more characters long"})
//     .max(30, {message: "Must be 30 or fewer characters long"})
//     .trim()
//     .toLowerCase(),
//     password: z.string({
//         required_error: "Password is required"
//     })
//     .min(6, {message:"Password must be at least 6 characters long"}),
//     firstName: z.string().trim().max(20, {
//         message: "First name must be 20 characters long",
//     }),
//     lastName: z.string().trim().max(20, {
//         message: "Last name must be 20 characters long",
//     }),
// });

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

router.post("/signup", async (req, res) => {
    try{
        const { username, firstName, lastName, password } = req.body;
        const result = signupBody.safeParse({
            username,
            firstName,
            lastName,
            password
        });

        if(!result.success){
            return res.status(500).json({
                success: result.success,
                message: "Enter valid input",
            })
        }
        
        const existingUser = await User.findOne({username: username});
        if(existingUser){
            return res.status(404).json({
                message: "User does exist",
            })
        }
        const newUser = new User({
            username,
            password,
            firstName,
            lastName,
        });
        const token = jwt.sign({
            id: newUser._id
        }, JWT_SECRET);
        await newUser.save();
        res.status(200).json({
            token: token,
            message: "New user has been added to the database",
        })
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error while validating of user input",
        })
    }
});

router.post("/signin", async (req, res) => {
    try{
        const { username, password } = req.body;
        const result = signinBody.safeParse({
            username,
            password,
        });

        if(!result.success){
            return res.status(404).json({
                success: result.success,
                message: "User does not exist",
            })
        }
        const validUser = await User.findOne({username: username});
        if(!validUser) {
            return res.status(404).json({
                message: "User does not exist",
            });
        }
        const id = validUser._id;
        res.status(200).json({
            token: jwt.sign({
                id
            }, JWT_SECRET)
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: "Error while sign in",
        })
    }
});

module.exports = router;
