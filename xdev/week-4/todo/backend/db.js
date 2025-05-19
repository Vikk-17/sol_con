const mongoose = require("mongoose");
const uri = "mongodb+srv://admin-souvik:test123@cluster0.r0k4t.mongodb.net/";
mongoose.connect(uri);

/*
 * Todo {
 * title: string,
 * description: string,
 * completed: boolean,
 * }
 * */

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
    todo
}
