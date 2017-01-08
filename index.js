var static = require('node-static');
var file = new static.Server('./public');
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response, function(err, res) {
        var requestUrl = request.url;
        var whitelist = "handrail_list";
        if (requestUrl.includes(whitelist)) {
            var newUrl = requestUrl.slice(0, requestUrl.indexOf(whitelist));
            file.serveFile(newUrl + 'handrail_list.json', 200, {}, request, response);
        }
    });
  }).resume();
}).listen(process.env.PORT || 3000);
