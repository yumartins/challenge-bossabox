const express = require('express');

const database = require('./backend/db.json');

const router = express.Router();

router.get('/api', (req, res) => res.json(database));

module.exports = router;
