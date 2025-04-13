const express = require("express");
const cors = require("cors");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");


app.use(express.json());
app.use(cors());

app.get("/todos", async function (req, res) {
    // find all documents
    const todos = await todo.find({})
    res.json({
        todos
    })
});

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Enter valid input",
        });
        return;
    }
    // put the data in mongodb
   await todo.create({
       title: createPayload.title,
       description: createPayload.description,
       completed: false,
   })
    res.json({
        msg: "Todo is created"
    })
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    console.log(updatePayload)
    const parsedPayload = updateTodo.safeParse(updatePayload);
    console.log(parsedPayload.success)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Enter valid input",
        });
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        "$set": {completed:true}
    })
    res.json({
        msg: "Todo marked as completed"
    })
})


app.listen(3000, ()=>{
    console.log("server is running on 3000");
})
