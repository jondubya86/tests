const express = require('express');

const router = express.Router();

// API Route: /api
router.use('/users', require('./user-router'));
router.use('/todos', require('./todo-router'));

module.exports = router;