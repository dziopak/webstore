const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Customer must have a first name.'],
    unique: true,
    trim: true
  },
  last_name: {
    type: String,
    required: [true, 'Customer must have a surname.'],
    unique: true,
    trim: true
  },
  address_1: {
    type: String,
    required: [true, 'Customer must have an address.'],
    trim: true
  },
  address_2: {
    type: String,
    required: [true, 'Customer must have an address.'],
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Customer must have a valid phone number.'],
    trim: true
  },
  user: {
    type: Number,
    required: [true, 'Customer must have a user.']
  },
  company: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const customer = mongoose.model('Customer', customerSchema);
module.exports = customer;
