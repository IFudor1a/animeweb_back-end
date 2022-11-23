const productController = require('../controllers/product-controller')
const Router = require('express').Router;
const router = new Router();

router.get('/product', productController.getAll)
router.post('/product/delete/:id', productController.delete)
router.post('/product/create', productController.create)
router.put('/product/update/:id', productController.update)


module.exports = router;