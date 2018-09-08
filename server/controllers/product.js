const fs = require('fs')

function getProduct (req, res, next) {
    var products
    fs.readFile('./data/products.json', (err, data) => {
        if (err) throw err
        products = JSON.parse(data) 
        res.send(products)
    })
}

module.exports = {
    getProduct: getProduct
}