const mongoose = require("mongoose")
require("dotenv").config()

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,
    },
    password: {
        type: String,
        minLength: 6,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = { 
    User
};
