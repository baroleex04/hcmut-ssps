var express = require('express');
var router = express.Router();
const Printer = require('../db/models/printer.js');

/*let printers = [    // Testing-only
    { id: 1, name: "Printer A", status: "Online" },
    { id: 2, name: "Printer B", status: "Offline" },
];*/

router.get("/", (req, res) => {
        res.render("printer-provider/index");
});

router.get("/manage", async (req, res) => {
    try {
        const printers = await Printer.find();
        res.render("printer-provider/manage", { printers });
    } catch (err) {
        console.error("Error fetching printers:", err);
        res.status(500).send("Error fetching printers.");
    }
});

router.get("/add", async (req, res) => {
    try {
        // const printers = await Printer.find();
        res.render("printer-provider/add");
    } catch (err) {
        console.error("Error fetching printers:", err);
        res.status(500).send("Error fetching printers.");
    }
});

router.get("/edit", async (req, res) => {
    try {
        const printers = await Printer.find();
        res.render("printer-provider/edit", { printers });
    } catch (err) {
        console.error("Error fetching printers:", err);
        res.status(500).send("Error fetching printers.");
    }
});

router.post("/add", async (req, res) => {
    try {
        const { name, status } = req.body;

        const newPrinter = new Printer({ name, status });
        await newPrinter.save(); // Save to the database

        /*const newPrinter = {
            id: printers.length + 1, 
            name,
            status,
        };
        printers.push(newPrinter); */ // Testing-only

        res.redirect("/printer/manage"); // Redirect to the printer list
    } catch (err) {
        console.error("Error adding printer:", err);
        res.status(500).send("Error adding printer.");
    }
});

module.exports = router;
