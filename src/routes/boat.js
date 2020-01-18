const express = require('express');
const BoatController = require('../controllers/boat');
const router = express.Router();

router.get('/', BoatController.list);
router.get('/:id', BoatController.find);
router.put('/:id', BoatController.update);
router.delete('/:id', BoatController.remove);
router.post('/', BoatController.create);

module.exports = router;
