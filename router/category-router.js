const categoryController = require('../controllers/category-controller')
const Router = require('express').Router;
const router = new Router();

router.get('/', categoryController.getAll)
router.post('/delete/:id', categoryController.delete)
router.post('/create', categoryController.create)
router.put('/update/:id', categoryController.update)


module.exports = router;