var express = require('express');
var router = express.Router();
const Activity = require('../db/models/activity.js'); // Import the Activity model
/*const activities = [  // Testing-only
    { id: 1, name: "Printer Setup", description: "Setting up the new printer in the printing room", date: new Date("2024-11-01T10:00:00Z") },
    { id: 2, name: "System Update", description: "Updating the printer provider system to version 2.0", date: new Date("2024-11-02T14:30:00Z") },
    { id: 3, name: "Maintenance Check", description: "Conducting maintenance checks on all printers", date: new Date("2024-11-03T09:00:00Z") },
    { id: 4, name: "Network Configuration", description: "Reconfiguring network settings for improved printer connectivity", date: new Date("2024-11-04T16:45:00Z") }
];*/

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

router.get("/report", async (req, res) => {
    try {
        const activities = await Activity.find();
        res.render("spso/report", { activities });
    } catch (err) {
        console.error("Error fetching Activity:", err);
        res.status(500).send("Error fetching Activity.");
    }
});

module.exports = router;