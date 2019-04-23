const Joi = require("joi");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 50
  },
  email: {
    type: String,
    required: true,
    min: 3,
    max: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 1024
  }
});

const User = mongoose.model("users", UserSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
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

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
