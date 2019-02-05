function getProducts(req, res, next) {
  var products = [{
    id: 1,
    name: 'Cup holder',
    description: 'State of the art cup holder',
    price: '1.50'
  },
  {
    id: 2,
    name: 'Key ring',
    description: 'Somewhere to hang your keys onto',
    price: '0.65'
  },
  {
    id: 3,
    name: 'Phone case',
    description: 'Made of plastic, protects your phone perfectly',
    price: '2.50'
  },
  {
    id: 4,
    name: 'Gloves',
    description: 'Keeps your hands warm',
    price: '5.99'
  },
  {
    id: 5,
    name: 'Scarf',
    description: 'Keeps the neck warm. Goes well with gloves',
    price: '1.50'
  },
  {
    id: 6,
    name: 'Suncream',
    description: 'A must have if you are going out into the sun',
    price: '0.99'
  },
  {
    id: 7,
    name: 'DVD player',
    description: 'Enjoyable bit of kit for watching DVDs',
    price: '1.50'
  },
  {
    id: 8,
    name: 'Glasses cleaner',
    description: 'Gets rid of the grease and smears',
    price: '10.99'
  },
  {
    id: 9,
    name: 'Frying pan',
    description: 'Made of cast iron. You\'ll never need another pan' ,
    price: '30.00' 
  },
  {
    id: 10,
    name: 'Wood burner',
    description: 'Keep the chill away on a cold night',
    price: '299.99'
  }]

  res.send(products)
}

module.exports = {
  getProducts
}