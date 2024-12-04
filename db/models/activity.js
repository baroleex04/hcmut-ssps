var mongoose = require('mongoose');

var activitySchema = mongoose.Schema({
    id:{
        type: Number,
        default: 0
    },
    name: {
        type: String,
        default: 'No Name'
    },
    description: {
        type: String,
        default: 'No Description'
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('activity', activitySchema, 'activity');
