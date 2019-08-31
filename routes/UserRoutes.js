const express = require('express');
const usersController = require('./../controllers/UsersController');

const router = express.Router();

router
  .route('/')
  .get(usersController.getAllUsers)
  .post(usersController.addNewUser);

router
  .route('/:id')
  .get(usersController.getUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
