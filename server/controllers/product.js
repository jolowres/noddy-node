// var products = require('../data/products.json')

function getProduct (req, res, next) {
    res.send('hello jo')
}

module.exports = {
    getProduct: getProduct
}