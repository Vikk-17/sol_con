const express = require("express");
const app = express();
const rootRouter = require("./routes/index");
const cors = require("cors");
const secretKey = require("./config");
const { User } = require("./db");
const mongoose = require("mongoose");
// Fetch the env details
require("dotenv").config()
const PORT = process.env.PORT;
// connect with the database
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        data = {
            host: conn.connection.host,
            port: conn.connection.port,
            name: conn.connection.name,
        }
        console.log(`Database connected ${JSON.stringify(data)}`);

    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

connectDb();

// middleware
app.use(cors());
app.use(express.json());

// router
app.use("/api/v1", rootRouter);

// home route
app.get("/", (req, res) => {
    res.send("Rustacean");
});


app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server is listening on 3000");
});
