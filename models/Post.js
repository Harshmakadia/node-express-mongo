const mongoose = require('mongoose');

// Create DB Schema
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Name that will shown in the mongoDB
module.exports = mongoose.model('Posts', PostSchema);