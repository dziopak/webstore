const express = require('express');
const tourController = require('./../controllers/ToursController');

const router = express.Router();

// router.param('id', tourController.checkID);

router
  .route('/top-5-cheap')
  .get(tourController.topCheapTours, tourController.getAllTours);

router.route('/stats').get(tourController.getTourStats);
router.route('/monthly-stats/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.addNewTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
