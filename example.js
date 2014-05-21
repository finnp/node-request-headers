var requestHeaders = require('./index.js');

requestHeaders('http://foaas.herokuapp.com/you/finn/finn', function(headers) {
  console.dir(headers);
});

requestHeaders('https://google.com', function(headers) {
  console.log('Content type: ' + headers.content_type);
});
