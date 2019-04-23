const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { UserDetails, validateUserDetails } = require("../modules/userDetails");

router.post("/", async (req, res) => {
  const { error } = validateUserDetails(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let userDetail = await UserDetails.findOne({ phone: req.body.phone });
  if (userDetail) return res.status(400).send("user data already exites");

  userDetail = new UserDetails({
    name: req.body.name,
    phone: req.body.phone,
    country: req.body.country
  });
  const result = await userDetail.save();
  res.send(result);
});

module.exports = router;
