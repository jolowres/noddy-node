const productController = require('../controllers/product')
const router = require('express').Router()

router.get('/product', productController.getProducts)
router.get('/product/:id', productController.getProductById)
router.get('/product-not-cached', productController.getProductsFromFileSystem)
router.get('/product-not-cached/:id', productController.getProductsByIdFromFileSystem)
router.post('/product', productController.updateProduct)

module.exports = router
