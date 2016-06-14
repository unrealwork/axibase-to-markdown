'use strict';

var urlHelper = require('./helpers/url-helper');
var logger = require('npmlog');

urlHelper.pageSource('', function(err, data) {
    if (!err) {
        logger.info(data);
    }
});
