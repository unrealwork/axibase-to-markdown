var jQuery = require('jquery');
var linkCoversion = require('./link-conversion');

module.exports = {
    selector: 'p',
    convert: function(element) {
        'use strict';
        element.children(linkCoversion.selector).each(function () {
            var child = element.find(this);
            element.find(child).replaceWith(linkCoversion.convert(child));
        });
        return element.text();
    }
};
