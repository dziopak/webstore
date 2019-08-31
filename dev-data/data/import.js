const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const TourModel = require('./../../models/TourModel');

dotenv.config({ path: './../../config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(con => {
    console.log('DB connected...');
  });

const tours = JSON.parse(fs.readFileSync('tours-simple.json', 'utf-8'));

const importData = async () => {
  try {
    await TourModel.create(tours);
    console.log('Data loaded');
  } catch (err) {
    console.log(err);
  }
};

importData();
