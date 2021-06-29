console.log("in API Index")
const router = require('express').Router();
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentsRoutes');
const userRoutes = require('./userRoutes');

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;