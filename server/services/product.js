const productController = require('../controllers/product')
const router = require('express').Router()

router.get('/product', productController.getProduct)
router.post('/product', productController.updateProduct)

module.exports = router
