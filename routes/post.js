const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const _ = require("lodash");

const { Post, validate } = require("../modules/post");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let post = new Post(req.body, _.pick(["title", "desc"]));
  await post.save();
  res.send(_.pick(post, ["title", "desc"]));
});

module.exports = router;
