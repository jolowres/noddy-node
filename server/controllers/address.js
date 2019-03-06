var request = require('request');

function getAddress(req, res, next) {
  const getAddressApiKey = 'p7MW7jHk4UW83L_RYW-Sgw17780 '
  var api = `https://api.getAddress.io/find/${req.params.postcode}/${req.params.houseNumber}?api-key=${getAddressApiKey}`
  
  request(api, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the google web page.
    }
})

  
}

module.exports = {
  getAddress
}