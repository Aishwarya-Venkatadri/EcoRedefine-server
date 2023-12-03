// authRoutes.js

const express = require('express');
const authController = require('../controllers/authentication-controller.js');

const router = express.Router();

router.post('/', authController.login);

module.exports = router;
