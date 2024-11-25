var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("student/index");
});

router.get("/upload", (req, res) => {
    res.render("student/upload");
});

router.get("/config", (req, res) => {
    res.render("student/config");
});

router.get("/buy-page", (req, res) => {
    res.render("student/buy-page");
});

router.get("/gift-page", (req, res) => {
    res.render("student/gift-page");
});

router.get("/view-log", (req, res) => {
    res.render("student/view-log");
});

module.exports = router;