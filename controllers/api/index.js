const router = require('express').Router();
const postRoutes = require('./postRoutes');
//const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

router.use('/posts', postRoutes);
//router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;