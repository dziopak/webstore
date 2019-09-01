const express = require('express');
const menusController = require('./../controllers/MenusController.js');

const router = express.Router();

router.route('/').get(menusController.getAllMenus);
// router.route('/:id').get(menusController.getMenu);

module.exports = router;
