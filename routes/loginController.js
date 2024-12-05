var express = require('express');
var router = express.Router();

// router.get("/", (req, res) => {
//     res.render("login/choose-role");
// });

router.get("/", (req, res) => {
    res.render("login/loginForm");
});

module.exports = router;
