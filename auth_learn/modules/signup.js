const mongoose = require("mongoose");
const Joi = require("joi");

const User = mongoose.model(
  "users",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      min: 3
    },
    email: {
      type: String,
      required: true,
      min: 5,
      unique: true
    },
    password: {
      type: String,
      required: true,
      min: 6
    }
  })
);

function validateSignup(user) {
  const Schema = {
    name: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .min(5)
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  };
  return Joi.validate(user, Schema);
}

exports.User = User;
exports.validate = validateSignup;
