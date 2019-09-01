const ItemModel = require('./../models/ItemModel.js');
const APIFeatures = require('./../utils/APIFeatures');

exports.getAllItems = async (req, res) => {
  try {
    const features = new APIFeatures(ItemModel.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const items = await features.query;

    res.status(200).json({
      status: 'success',
      results: items.length,
      data: {
        items
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getItem = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route not yet defined.'
  });
};
