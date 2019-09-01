const express = require('express');
const collectionsController = require('../controllers/CollectionsController.js');

const router = express.Router();

// router
//   .route('/top-5-cheap')
//   .get(tourController.topCheapTours, tourController.getAllTours);
// router.route('/stats').get(tourController.getTourStats);
// router.route('/monthly-stats/:year').get(tourController.getMonthlyPlan);

router.route('/').get(collectionsController.getAllCollections);
//   .post(tourController.addNewTour);
router.route('/:id').get(collectionsController.getCollection);
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);

module.exports = router;
