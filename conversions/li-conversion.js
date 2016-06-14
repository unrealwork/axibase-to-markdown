var linkCoversion = require('./link-conversion');

module.exports = {
    selector: 'li',
    convert: function(element) {
        'use strict';
        return '- ' + require('./paragraph-conversion').convert(element);
    }
};

