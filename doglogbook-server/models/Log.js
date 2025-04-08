const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    dogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dog',
        required: true,
    },
    activity: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Log', logSchema);
