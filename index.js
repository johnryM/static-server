var static = require('node-static');
var file = new static.Server('./public');
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response, function(err, res) {
        if (request.url.includes("handrail_list")) {
            file.serveFile('/static/UK/default/handrail_list.json', 200, {}, request, response);
        }
    });
  }).resume();
}).listen(process.env.PORT || 3000);
