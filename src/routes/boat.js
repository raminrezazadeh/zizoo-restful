const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.json({ss:1});
});

module.exports = router;
