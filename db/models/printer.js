var mongoose = require('mongoose');

var printerSchema = mongoose.Schema({
    id:{
        type: Number,
        default: 0
    },
    name: {
        type: String,
        default: 'No Name'
    },
    type: {
        type: String,
        default: 'No Type'
    }
});

module.exports = mongoose.model('printer', printerSchema, 'printer');
