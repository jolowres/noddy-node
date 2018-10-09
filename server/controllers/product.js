const fs = require('fs')
const DATA_DIR = './data'

function getProducts (req, res, next) {
    var products = []

    var readDirPromise = new Promise((resolve, reject) => {
        fs.readdir(DATA_DIR, (err, filenames) =>  {
            resolve(filenames)
        })
    })

    readDirPromise.then(filenames => Promise.all(filenames.map((filename) => {
        return new Promise((resolve, reject) => {
            var fullPath = DATA_DIR + '/' + filename
            fs.readFile(fullPath, (err, data) => {
                if (err) throw err
                products.push(JSON.parse(data))
                resolve()
            })
        })
    }))

    .then(() => {
        res.send(products)
    }))
}

function getProductById (req, res, next) {
    var products
    var filename = DATA_DIR + '/' + req.params.id + '.json'
    fs.readFile(filename, (err, data) => {
        if (err) throw err
        products = JSON.parse(data) 
        res.send(products)
    })
}

function updateProduct (req, res, next) {
    var productJSON = JSON.stringify(req.body.product)
    var filename = DATA_DIR + '/' + req.body.product.productCode + '.json'
    fs.writeFile(filename, productJSON, 'utf8', (err) => {
        if (err) throw err
        res.sendStatus(200)
    })
}

module.exports = {
    getProductById,
    getProducts,
    updateProduct
}