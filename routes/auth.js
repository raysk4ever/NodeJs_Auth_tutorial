const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const _ = require("lodash");
const Joi = require("joi");

const { User } = require("../modules/users");

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("invalid email or password.");

  const validatePassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!validatePassword) {
    return res.status(400).send("invalid email or password..");
  }
  res.send(true);
});

function validateUser(req) {
  const schema = {
    email: Joi.string()
      .min(3)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(3)
      .max(255)
      .required()
  };

  return Joi.validate(req, schema);
}

module.exports = router;
