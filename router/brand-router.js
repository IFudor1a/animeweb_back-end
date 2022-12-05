const brandController = require('../controllers/brand-controller')
const Router = require('express').Router;
const router = new Router();

router.get('/', brandController.getAll)
router.post('/delete/:id', brandController.delete)
router.post('/create', brandController.create)
router.put('/update/:id', brandController.update)


module.exports = router;