const fs = require('fs')
const DATA_DIR = './data'

var jsonData = []

function getData () {
  if(!jsonData.length) {
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
                jsonData.push(JSON.parse(data))
                resolve()
            })
        })
    })))
  }
  return jsonData
}

module.exports.getData = getData