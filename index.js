const auth = require("./routes/auth");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const users = require("./routes/users");
const post = require("./routes/post");
const userDetails = require("./routes/userDetails");

mongoose
  .connect("mongodb://localhost:27017/Auth_Jelly")
  .then(() => console.log("Connected to Mongodb"))
  .catch(err => console.error("couldn't connect to mongodb"));

app.use(express.json());
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/post", post);
app.use("/api/userDetails", userDetails);

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`running at PORT ${port}...`));
