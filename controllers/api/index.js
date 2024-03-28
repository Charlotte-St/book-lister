const router = require('express').Router();

const bookRoutes = require('./bookRoutes');
const listRoutes = require('./listRoutes');
const userRoutes = require('./userRoutes');

//router.use('/user', userRoutes);
router.use('/book', bookRoutes);
router.use('/list', listRoutes);

module.exports = router;