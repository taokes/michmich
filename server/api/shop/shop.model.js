'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShopSchema = new Schema({
    name: String,
    description: String,
    shine: Number,
    price: Number,
    rarity: Number,
    color: String,
    faces: Number,
    images: [String],
    reviews: [String]
});

module.exports = mongoose.model('Shop', ShopSchema);

