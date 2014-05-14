# request-headers

Requests the headers of a URL and then aborts the request. It uses a simple GET, even though a HEAD request might also be used, but I am not sure whether that works well enough.

```
requestHeaders('https://foaas.herokuapp.com/you/finn/finn', function(headers) {
  console.log('Content type: ' + headers.content_type);
});
```