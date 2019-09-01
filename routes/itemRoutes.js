const express = require('express');
const itemsController = require('./../controllers/ItemsController.js');

const router = express.Router();

// router
//   .route('/top-5-cheap')
//   .get(tourController.topCheapTours, tourController.getAllTours);
// router.route('/stats').get(tourController.getTourStats);
// router.route('/monthly-stats/:year').get(tourController.getMonthlyPlan);

router.route('/').get(itemsController.getAllItems);
//   .post(tourController.addNewTour);
// router
//   .route('/:id')
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);

module.exports = router;
