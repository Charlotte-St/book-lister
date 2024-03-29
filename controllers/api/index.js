const router = require('express').Router();

const bookRoutes = require('./bookRoutes');
const listRoutes = require('./listRoutes');
const userRoutes = require('./userRoutes');
const listItemRoutes = require('./listItemRoutes');

router.use('/user', userRoutes);
router.use('/book', bookRoutes);
router.use('/list', listRoutes);
router.use('/listitem', listItemRoutes);

module.exports = router;