const express = require("express");
const mongoose = require("mongoose");
const blogRouters = require("./routes/blogRoutes");
const bookRouters = require("./routes/bookRoutes");
const userRouters = require("./routes/userRoutes");
const path = require("path");
const cors =  require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
// const morgan = require("morgan");
const ratelimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

app.use(express.json());
//to secure node js
app.use(helmet());
app.use(morgan("common"));
app.use(cors({
  origin: "http://localhost:3000",
  method: ["GET", "PUT"]
}));
app.use(ratelimit({
  windowMs:5000,
  max:3,
  message:"Too many request"
}))

app.use("/upload", express.static(path.join(__dirname, "upload")));

app.get("/", (req, res) => {
  res.send("Here is ur server");
});

app.use("/users", userRouters);
app.use("/books", bookRouters);
app.use("/blogs", blogRouters);

mongoose.connect("mongodb://localhost:27017/auth").then(() => {
  console.log("db connected");
  app.listen(4000, () => {
    console.log("Server is up and running");
  });
});
