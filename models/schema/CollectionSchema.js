const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Collection must have a name.'],
    unique: true,
    trim: true
  },
  linkUrl: {
    type: String,
    required: [true, 'Collection must have a link url.']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    }
  ]
});

module.exports = CollectionSchema;
