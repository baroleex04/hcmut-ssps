var express = require('express');
var bodyParser = require('body-parser');

// var Database = require('./db/database');
const defaultRouter = require('./routes/controller');
const loginRouter = require('./routes/loginController.js');
const printerRouter = require('./routes/printerController.js');
const spsoRouter = require('./routes/spsoController.js');
const stuRouter = require('./routes/studentController.js');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("assets"))

app.set('view engine', 'ejs');
app.set('views', './views');

// Website routes
app.use('/', defaultRouter);
app.use('/login', loginRouter);
// Notice: these route need middleware
app.use('/student', stuRouter);
app.use('/spso', spsoRouter);
app.use('/printer', printerRouter);
// end Notice
app.get("/*", (req, res) => {
    res.render("404");
});

app.listen(3000, function () {
    console.log("Starting at port 3000...");
});
