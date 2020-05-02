const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coop: {
        type: Boolean,
        required: true
    },
    favorite: {
        type: Boolean,
        required: true
    },
    teams: {
        type: Array,
        required: true
    },
    imageUrl: {
        type: String,
    },
    bggURL: {
        type: String
    },
    melodiceURL: {
        type: String
    },
    rulesURL: {
        type: String
    }
});

module.exports = mongoose.model('Game', gameSchema);