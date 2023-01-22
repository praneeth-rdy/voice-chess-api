const express = require("express");
const router = express.Router();
const { home } = require('../controllers/main');

router.route('/').get(home);

module.exports = router;