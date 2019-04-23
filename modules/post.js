const mongoose = require("mongoose");
const Joi = require("joi");

const Post = mongoose.model(
  "posts",
  new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      require: true,
      min: 10
    }
  })
);

function ValidatePost(post) {
  const schema = {
    title: Joi.string().required(),
    desc: Joi.string()
      .required()
      .min(10)
  };
  return Joi.validate(post, schema);
}

exports.Post = Post;
exports.validate = ValidatePost;
