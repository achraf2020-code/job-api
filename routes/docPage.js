const router = require('express').Router(),
docPageController = require('../controllers/docPage')

router.get('/',docPageController.getDocPage)


module.exports = router