# request-headers

Requests the headers of a URL and then aborts the request. The header keys get
transformed from `Content_Type` to `content_type`.

```
requestHeaders('https://foaas.herokuapp.com/you/finn/finn', function(headers) {
  console.log('Content type: ' + headers.content_type);
});
```
It is similar to the npm module `curli`, but `curli` uses the HEAD command,
which might be a better idea. However am not sure how well implemented HEAD
is across the web therefore I rather abort a GET.
