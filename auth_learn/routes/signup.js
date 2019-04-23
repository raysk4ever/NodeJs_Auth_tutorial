const express = require("express");
const router = express.Router();
const { User, validate } = require("../modules/signup");
// router.get("/", (req, res) => {
//   res.send("Hie");
// });

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("user already resgistred...");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  const result = await user.save();
  res.send(result);
});

module.exports = router;
