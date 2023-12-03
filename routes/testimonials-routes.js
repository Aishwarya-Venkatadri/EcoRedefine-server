const express = require('express');
const testimonialsController = require('../controllers/testimonials-controller');

const router = express.Router();

router
  .route('/')
  .get(testimonialsController.getAllTestimonials);

router
  .route('/add')
  .post(testimonialsController.addNewTestimonial);

router
  .route('/:id')
  .get(testimonialsController.getTestimonialById)
  .delete(testimonialsController.deleteTestimonial);

module.exports = router;
