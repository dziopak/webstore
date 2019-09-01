const CollectionModel = require('./../models/CollectionModel.js');
const APIFeatures = require('./../utils/APIFeatures');

exports.getAllCollections = async (req, res) => {
  try {
    const features = new APIFeatures(
      CollectionModel.find().populate('items'),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const collections = await features.query;
    res.status(200).json({
      status: 'success',
      results: collections.length,
      data: {
        collections: collections
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getCollection = async (req, res) => {
  try {
    const collection = await CollectionModel.findById(req.params.id).populate();

    res.status(200).json({
      status: 'success',
      data: {
        collection
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
