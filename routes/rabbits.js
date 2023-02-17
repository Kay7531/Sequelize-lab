const router = require('express').Router()
const rabbitsCtrl = require('../controllers/rabbits.js')
//POST /api/rabbits
router.post('/', rabbitsCtrl.create)
//GET /api/rabbits
router.get('/', rabbitsCtrl.index)
//PUT /api/rabbits/:id
router.put('/:id', rabbitsCtrl.update)
//DELETE /api/rabbits/:id
router.delete('/:id', rabbitsCtrl.delete)
//POST /api/rabbits/:id/feedings
router.post('/:id/feedings', rabbitsCtrl.addFeeding)

module.exports = router