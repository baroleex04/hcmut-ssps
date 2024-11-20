let mongoose = require('mongoose');

const mongodb_url = 'mongodb://localhost:27017/spss'
// const mongodb_url = 'mongodb+srv://nguyentanbaole2004:<db_password>@cluster0.uzdikkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(mongodb_url, {useNewUrlParser: true})
            .then(() => {
                console.log("Database connection successfully!");
            })
            .catch(err => {
                console.log("Database connection error!");
            })
    }
}

module.exports = new Database();
