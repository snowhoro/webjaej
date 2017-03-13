const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menulistSchema = new Schema({
    name: {
        es: {
            type: String,
            required: true
        },
        en: {
            type: String,
            required: true
        }
    },
    href: {
        type: String,
        required: true
    },
    order: Number,
    created_on: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: String,
        default: 'admin'
    },
    active: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('menulist', menulistSchema);