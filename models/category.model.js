const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const categorySchema = new Schema({
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
    subcategories:[{
        type: Number,
        ref: 'subcategory'
    }],
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

// id autoIncrement
categorySchema.plugin(autoIncrement.plugin, {
    model: 'category',
    field: '_id',
    startAt: 1
});

module.exports = mongoose.model('category', categorySchema);