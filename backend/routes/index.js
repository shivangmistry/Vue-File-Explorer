const express = require('express');
const router = express.Router();

const readDir = require('./directoryops/readDir');

router.get('/', readDir);

module.exports = router;