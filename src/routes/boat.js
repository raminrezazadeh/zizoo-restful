const express = require('express');
const asyncHandler = require('express-async-handler');
const BoatController = require('../controllers/boat');
const router = express.Router();

router.get('/', asyncHandler(BoatController.list));
router.post('/', asyncHandler(BoatController.create));
router.get('/:id', asyncHandler(BoatController.find));
router.put('/:id', asyncHandler(BoatController.update));
router.delete('/:id', asyncHandler(BoatController.remove));

module.exports = router;
