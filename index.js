var http = require('http')
var https = require('https')

module.exports = function (url, cb) {
  var protocol
  
  if (url.slice(0, 5) === 'https') protocol = https
  else protocol = http

  var req = protocol.get(url, function (res) {
    req.abort()
    cb(null, res.statusCode, res.headers)
  })
  
  req.on('error', function (err) {
    cb(err)
  })

  return req
}
