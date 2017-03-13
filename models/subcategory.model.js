const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const subcategorySchema = new Schema({
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
    order: Number,
    img: {
        type: String,
        default: "img/demo-images/products/thumb_anestesia1.jpg"
    },
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
subcategorySchema.plugin(autoIncrement.plugin, {
    model: 'subcategory',
    field: '_id',
    startAt: 1
});

module.exports = mongoose.model('subcategory', subcategorySchema);