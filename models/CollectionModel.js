const mongoose = require('mongoose');
const CollectionSchema = require('./schema/CollectionSchema.js');

const Collection = mongoose.model('Collection', CollectionSchema);
module.exports = Collection;
