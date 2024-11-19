var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("spso/index");
});

router.get("/config", (req, res) => {
    res.render("spso/config");
});

router.get("/manage", (req, res) => {
    res.render("spso/manage");
});

router.get("/viewlog", (req, res) => {
    res.render("spso/viewlog");
});

router.get("/report", (req, res) => {
    res.render("spso/report");
});

module.exports = router;