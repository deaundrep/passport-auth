var express = require("express");
var router = express.Router();
var passport = require("passport");
var { signUp, login, updateProfile } = require("./controller/userController");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/sign-up", signUp);
router.post("/login", login);
router.put("/update-profile", passport.authenticate("jwt-user"), updateProfile);

module.exports = router;
