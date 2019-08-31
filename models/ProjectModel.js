const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Project must have a name.'],
    unique: true,
    trim: true
  },
  deadline: {
    type: Date,
    required: [true, 'Project must have a deadline.']
  },
  owner: {
    type: Number,
    required: [true, 'Project must have an owner.']
  },
  customer: {
    type: Number,
    required: [true, 'Project must be assigned to a customer.']
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Project must have a description']
  },
  imageCover: {
    type: String
    // required: [true, 'A tour must have an image cover']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const project = mongoose.model('Project', projectSchema);
module.exports = project;
