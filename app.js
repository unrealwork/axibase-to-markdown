'use strict';
var urlHelper = require('./helpers/url-helper');
var AxiabseParser = require('./helpers/axibase-parser');
var logger = require('npmlog');
var pathModule = require('path');
var fs = require('fs');

var cwd = process.cwd();
var argv = process.argv;

function localLinks(links, markdownSource, fileDir) {
    var resourceFolder = fileDir + '/resources';
    console.log(links);
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var fileName = link.split("/").pop();
        var newLink = 'resources/' + fileName;
        markdownSource = markdownSource.replace(link, newLink);
    }
    return markdownSource;
};

try {
    var url = process.argv[2].toString();
    var path = process.argv[3].toString();
    if (path.charAt(0) !== '/') {
        console.log(cwd);
        path = cwd + '/' + path;
    }
    console.log(path);

    urlHelper.pageSource(url, function (err, html) {
        console.log(err);
        if (err) {
            throw err;
        }
        var axibaseParser = new AxiabseParser(html);
        fs.access(path, fs.F_OK, function (err) {
            var markdownSource = axibaseParser.translate();
            markdownSource = markdownSource.replace('](/', '](https://axibase.com/');
            markdownSource = localLinks(axibaseParser.resourceLinks, markdownSource, pathModule.dirname(path));
            if (!err) {
                fs.writeFile(path, markdownSource, 'utf8', function (err) {
                    if (!err) {
                        logger.info('File :', 'Markdown file created in path %j', path);
                    }
                });
            } else {
                fs.writeFile(path, markdownSource, 'utf8', function (err) {
                    if (!err) {
                        logger.info('File :', 'Markdown file created in path %j', path);
                    }
                });
            }
        });
    })
} catch (e) {
    logger.info(e);
    throw  e;
}
