const express = require('express');
const router = express.Router();

let object = {
  a: 1,
  b: 2,
};

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
