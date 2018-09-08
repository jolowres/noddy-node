const productController = require('../controllers/product')

const router = require('express').Router()

router.get('/', productController.getProduct)

module.exports = router
