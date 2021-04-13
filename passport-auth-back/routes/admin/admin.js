var express = require("express");
var router = express.Router();
var passport = require("passport");

var { signUp, login, updateProfile } = require("./controller/adminController");
console.log(signUp)
router.post("/sign-up", signUp);
router.post("/login", login);

router.put(
    "/update-profile",
    passport.authenticate("admin-auth", { session: false }),
    updateProfile
);



module.exports = router;