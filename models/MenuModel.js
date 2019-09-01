const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Menu must have a name.'],
      unique: true,
      trim: true
    },
    location: {
      type: Number,
      required: [true, 'Menu must have a location']
    },
    menus: [Array],
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

// menuSchema.virtual('routeName').get(function() {
//   return this.name.toLowercase();
// });

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
