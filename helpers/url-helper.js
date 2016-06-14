'use strict';
exports.pageSource = pageSource;

var http = require('http');

function pageSource(page, callback) {
    var options = {
        host: 'axibase.com',
        port: 80,
        path: page
    };

    http.get(options, function(res) {
        var  content = '';
        if (res.statusCode === 200) {
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                content += chunk;
            });

            res.on('end', function() {
                callback(null, content);
            });
        } else {
            var error  = new Error('Page doesn\'t exist');
            callback(error, null);
        }
    });
    
}
