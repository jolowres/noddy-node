const fs = require('fs')
const DATA_DIR = './data'

function readFiles() {

}

function getProducts (req, res, next) {
    var products = []


    var myPromise = new Promise((resolve, reject) => {
        fs.readdir(DATA_DIR, (err, filenames) =>  {
            resolve(filenames)
        })
    })

    myPromise.then(filenames => Promise.all(filenames.map((filename) => {
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

function getProduct (req, res, next) {
    var products
    fs.readFile('./data/products.json', (err, data) => {
        if (err) throw err
        products = JSON.parse(data) 
        res.send(products)
    })
}

function updateProduct (req, res, next) {
    res.json(req.body.product)
}

module.exports = {
    getProduct,
    getProducts,
    updateProduct
}