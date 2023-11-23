const express = require('express');
const categoryController =require( "../controllers/categories-controller.js");

const router = express.Router();

router
.route("/")
.get(categoryController.index);


module.exports = router;