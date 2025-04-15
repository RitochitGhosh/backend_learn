const express = require("express");

const { connectToMongoDB } = require("./connection");
const urlRouter = require("./routes/url");

const app = express();
const PORT = 8001;


//
const URL = require("./models/url-schema");

connectToMongoDB("mongodb://127.0.0.1:27017/url_shortner").then(() => console.log("MongoDB connected..."))

app.use(express.json())

app.use("/url", urlRouter);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}/`);    
})