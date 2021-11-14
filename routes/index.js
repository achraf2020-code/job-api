const checkAuth = require('../middlewars/checkAuth')
const router = require('express').Router(),
authRoutes = require('./auth'),
jobRoutes = require('./job')


router.use('/auth',authRoutes)
router.use('/job',checkAuth,jobRoutes)


module.exports = router