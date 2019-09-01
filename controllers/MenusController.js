const MenuModel = require('./../models/MenuModel');
const APIFeatures = require('./../utils/APIFeatures');

exports.getAllMenus = async (req, res) => {
  try {
    const features = new APIFeatures(MenuModel.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const menus = await features.query;

    res.status(200).json({
      status: 'success',
      results: menus.length,
      data: {
        menus
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getMenu = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route not yet defined.'
  });
};
