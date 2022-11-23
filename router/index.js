const Router = require('express');
const router = new Router();
const brandRouter = require('./brand-router');
const storeRouter = require('./store-router');
const customerRouter = require('./customer-router');
const productRouter = require('./product-router');
const categoryRouter = require('./category-router');
const orderRouter = require('./order-router');

router.use('/product', productRouter);
router.use('/category', categoryRouter);
router.use('/brand', brandRouter);
router.use('/customer', customerRouter);
router.use('/order', orderRouter);
router.use('/store', storeRouter);

module.exports = router;