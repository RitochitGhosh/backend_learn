const express = require("express");

const { connectMongoDB } = require("./connection");
const { requestLogger } = require("./middlewares");
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

// Connection
connectMongoDB("mongodb://127.0.0.1:27017/my-custom-app").then(() =>
  console.log("MongoDB connected..")
);

// middleware - Plugin
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger("./log.txt"));

// Router
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
