const mongoose = require('mongoose');
const ItemSchema = require('./schema/ItemSchema');

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
