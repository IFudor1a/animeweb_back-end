const productController = require('../controllers/product-controller')
const Router = require('express').Router;
const router = new Router();

router.get('/', productController.getAll)
router.post('/delete/:id', productController.delete)
router.post('/create', productController.create)
router.put('/update/:id', productController.update)


module.exports = router;