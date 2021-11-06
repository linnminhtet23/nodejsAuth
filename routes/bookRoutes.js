const auth = require("../middlewares/auth");

const router = require("express").Router();

router.get("/public", (req, res) => {
  res.send("public books");
});

router.get("/private", auth, (req, res) => {
  res.send({ msg: `You got private book`, user: req.user });
});

module.exports = router;
