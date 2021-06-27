const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

console.log("In Index Routes")
//Router shortcuts
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
console.log("Exit Index Routes")
module.exports = router;