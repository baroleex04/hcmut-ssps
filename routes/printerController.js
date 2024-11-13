var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("printer-provider/index");
});

router.get("/manage", (req, res) => {
    res.render("printer-provider/manage");
});

module.exports = router;
