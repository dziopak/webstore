const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product must have a name.'],
      unique: true,
      trim: true
    },
    imageUrl: {
      type: String,
      required: [true, 'Product must have an image']
    },
    type: {
      type: String,
      required: [true, 'Product type must be assigned.']
    },
    price: {
      type: Number,
      required: [true, 'Product must have a price']
    },
    salesCount: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
  //   {
  //     toJSON: { virtuals: true },
  //     toObject: { virtuals: true }
  //   }
);

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
