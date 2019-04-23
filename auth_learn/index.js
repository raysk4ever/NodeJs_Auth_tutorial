const express = require("express");
const app = express();
const mongoose = require("mongoose");
const signup = require("./routes/signup");

mongoose
  .connect("mongodb://localhost:27017/Auth_learn")
  .then(() => console.log("connected to mongodb.."))
  .catch(err => console.error(err));

app.use(express.json());

app.use("/api/signup", signup);

const port = process.env.PORT || 3000;

app.listen(port, console.log(`running at ${port} port... `));
