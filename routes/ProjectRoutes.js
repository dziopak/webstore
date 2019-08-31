const express = require('express');
const projectsController = require('../controllers/ProjectsController');

const router = express.Router();

router
  .route('/')
  .get(projectsController.getAllProjects)
  .post(projectsController.addNewProject);
router.route('/:id').get(projectsController.getProject);
// .patch(tourController.updateTour)
// .delete(tourController.deleteTour);

module.exports = router;
