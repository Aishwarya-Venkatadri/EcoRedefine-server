const express = require('express');
const categoryController =require( "../controllers/categories-controller.js");

const router = express.Router();

router
.route("/")
.get(categoryController.index);

router.route("/:id")
.get(categoryController.listings);


module.exports = router;