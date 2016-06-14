var jQuery = require('jquery');
var liCoversion = require('./li-conversion');

module.exports = {
    selector: 'ul',
    convert: function(element) {
        'use strict';
        element.children(liCoversion.selector).each(function () {
            var child = element.find(this);
            element.find(child).replaceWith(liCoversion.convert(child));
        });
        return element.text();
    }
};
