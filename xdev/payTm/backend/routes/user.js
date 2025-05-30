const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware");


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

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

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
        // Account creation
        const newAccount = await Account.create({
            userId,
            balance: 1 + Math.random() * 10000,
        })
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


router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [
                {
                    firstName: {
                        "$regex": filter,
                    }
                },
                {
                    lastName: {
                        "$regex": filter,
                    }
                },
        ]
    });

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id,
        }))
    });
});


// problem has to be fixed with this route
router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

		await User.updateOne({ _id: req.userId }, req.body);
	
    res.json({
        message: "Updated successfully"
    })
});

module.exports = router;
