const express = require('express');
const BoatController = require('../controllers/boat');
const router = express.Router();

router.get('/', BoatController.list);

module.exports = router;
