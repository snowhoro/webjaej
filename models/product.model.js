var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = Schema({
    name: {
        type: String
    },
    type: {
        type: Number
    },
    brand: {
        type: Number
    },
    description: {
        type: String
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

var productModel = mongoose.model('product', productSchema);

module.exports = productModel;