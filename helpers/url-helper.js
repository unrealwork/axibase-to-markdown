'use strict';
exports.pageSource = pageSource;

var http = require('https');
var logger = require('npmlog');

function pageSource(page, callback) {
    var options = {
        host: 'axibase.com',
        port: 443,
        path: page,
        headers: {
            accept: '*/*'
        },
        method: 'GET'
    };

    http.get(options, function (res) {
        var content = '';
        logger.info('Url: ', 'Trying to get page %j', options.host + options.path);
        if (res.statusCode === 200) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                content += chunk;
            });

            res.on('end', function () {
                callback(null, content);
            });
        } else {
            var error = new Error('Page doesn\'t exist');
            callback(error, null);
        }
    });
}
