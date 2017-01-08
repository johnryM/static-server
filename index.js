var static = require('node-static');
var localeArray = ["UK", "GNL", "MUNDO", "RUSSIAN", "HINDI", "CYMRU", "ARABIC"];
var file = new static.Server('./public');
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response, function(err, res) {
        var requestUrl = request.url;
        var whitelist = "handrail_list";
        if (requestUrl.includes(whitelist)) {
            var newUrl = "/static/" + getLocale(requestUrl) + "/default/handrail_list.json";
            file.serveFile(newUrl, 200, {}, request, response);
        }
    });
  }).resume();
}).listen(process.env.PORT || 3000);

function getLocale(url) {
    for (var i = 0; i < localeArray.length; i++) {
        if (url.includes(localeArray[i])) {
            return localeArray[i];
        }
    }
}
