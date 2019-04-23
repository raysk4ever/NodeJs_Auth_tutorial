const Joi = require("joi");
const mongoose = require("mongoose");

const UserDetails = mongoose.model(
  "UserDetails",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50
    },
    phone: {
      type: String,
      min: 10,
      max: 10,
      unique: true
    },
    country: {
      type: String,
      min: 3,
      max: 50
    }
  })
);

function validateUserDetails(userDetails) {
  const Schema = {
    name: Joi.string()
      .required()
      .min(3)
      .max(50),
    phone: Joi.string()
      .required()
      .min(10)
      .max(10),
    country: Joi.string()
      .required()
      .min(3)
      .max(50)
  };
  return Joi.validate(userDetails, Schema);
}

exports.UserDetails = UserDetails;
exports.validateUserDetails = validateUserDetails;
