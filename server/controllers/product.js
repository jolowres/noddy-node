const fs = require('fs')
const DATA_DIR = './data'
const dataService = require('../services/data-service')

function getProductsFromFileSystem (req, res, next) {
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

function getProducts (req, res, next) {
    var json = dataService.getData()
    res.send(json)
}

function getProductById (req, res, next) {
    var products = dataService.getData()
    var myProduct = products.filter(product => product.productCode === req.params.id)[0]
    res.send(myProduct)
}

function getProductsByIdFromFileSystem(req, res, next) { 
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
    updateProduct,
    getProductsFromFileSystem,
    getProductsByIdFromFileSystem
}