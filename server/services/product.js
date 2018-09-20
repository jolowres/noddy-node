const productController = require('../controllers/product')
const router = require('express').Router()

router.get('/product', productController.getProducts)
router.get('/product/:id', productController.getProductById)
router.post('/product', productController.updateProduct)

module.exports = router
