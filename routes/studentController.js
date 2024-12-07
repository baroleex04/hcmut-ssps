var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("student/index");
});

router.get("/print", (req, res) => {
    res.render("student/print");
});

router.get("/buy-page", (req, res) => {
    res.render("student/buy-page");
});

router.get("/gift-page", (req, res) => {
    res.render("student/gift-page");
});

router.get("/viewlog", (req, res) => {
    res.render("student/viewlog");
});

router.get("/report", (req, res) => {
    res.render("student/report");
});

module.exports = router;