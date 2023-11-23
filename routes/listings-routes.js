const express = require('express');
const listingsController = require('../controllers/listings-controller.js');

const router = express.Router();

router
  .route('/')
  .get(listingsController.getAllListings);

router
  .route('/add')
  .post(listingsController.addNewListing);

router
  .route('/:id')
  .get(listingsController.getListingById)
  .put(listingsController.updateListing)
  .delete(listingsController.deleteListing);

module.exports = router;
