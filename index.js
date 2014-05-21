var http = require('http');
var https = require('https');
var protocol;
var headers;

module.exports = function(url, cb) {
  if(url.indexOf('https') === 0)
    protocol = https;
  else
    protocol = http;

  var req = protocol.get(url, function(res) {
    req.abort();
    headers = {};
    for(key in res.headers) {
      var new_key = key.replace(/-/g, '_');
      headers[new_key] = res.headers[key];
    }
    cb(headers);
  });
};
