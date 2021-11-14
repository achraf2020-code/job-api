
const router = require('express').Router(),
jobController = require('../controllers/job')



router.get('/',jobController.getAllJob)

router.get('/:id',jobController.getOneJob)

router.post('/',jobController.CreateJob)

router.patch('/:id',jobController.updateOneJob)

router.delete('/:id',jobController.deleteOneJob)




module.exports = router