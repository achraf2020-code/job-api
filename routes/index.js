const router = require('express').Router(),
authRoutes = require('./auth'),
jobRoutes = require('./job')
router.use('/auth',authRoutes)
router.use('/job',jobRoutes)
module.exports = router