const express = require("express");
const router = express.Router();
const Account = require("../db");
const authMiddleware = require("../middleware");


// have bug in both the router, check for the middleware code
router.get("/balance", authMiddleware, async(req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });
    res.josn({
        balance: account.balance,
    })
});

router.post("/transfer", authMiddleware, async(req, res) => {
    // Not so good solution
    // const { amount, to } = req.body;
    //
    // // find account with the userId
    // const account = await Account.findOne({
    //     userId: req.userId
    // });
    //
    // // check whether the balance < send amount 
    // if(account.balance < amount) {
    //     return res.status(400).json({
    //         message: "Insufficient balance",
    //     })
    // }
    //
    // // find the recipient account
    // const toAccount = await Account.findOne({
    //     userId: to,
    // });
    //
    // if(!toAccount) {
    //     return res.status(400).json({
    //         message: "Invalid account",
    //     });
    // }
    // // update both account asyncronously
    // await Account.updateOne({
    //     userId: req.userId,
    // }, {
    //     $inc: {
    //         balance: -amount
    //     }
    // });
    //
    // await Account.updateOne({
    //     userId: to
    // }, {
    //     $inc: {
    //         balance: amount
    //     }
    // });
    //
    // res.json({
    //     message: "Transfer successful",
    // });
    

    // Good soulution
    // Start a mongoose session
    const session = await mongoose.startSession();
    // start the transaction
    session.startTransaction();

    const { amount, to } = req.body;
    // sender account
    const account = await Account.findOne({
        userId: req.userId
    });

    // check for the balance
    if(!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance",
        });
    }
    
    // find receiver account
    const toAccount = await Account.findOne({
        userId: to,
    }).session(session);

    // if not abort the transaction
    if(!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account",
        });
    }

    // perform the transaction
    await Account.updateOne({
        userId: req.userId
    },{
        $inc: {
            balance: -amount
        }
    });
    await Account.updateOne({
        userId: to
    },{
        $inc: {
            balance: amount
        }
    });


    // commit all the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful",
    })
});

module.exports = router;
