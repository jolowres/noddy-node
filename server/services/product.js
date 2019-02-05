const productController = require('../controllers/product')
const shoppingController = require('../controllers/shopping')
const router = require('express').Router()

router.get('/product', productController.getProducts)
router.get('/product/:id', productController.getProductById)
router.get('/product-not-cached', productController.getProductsFromFileSystem)
router.get('/product-not-cached/:id', productController.getProductsByIdFromFileSystem)
router.post('/product', productController.updateProduct)

// api for shopping product
router.get('/shopping-product', shoppingController.getProducts)

module.exports = router
