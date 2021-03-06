var jQuery = require('jquery');
var linkCoversion = require('./link-conversion');
var codeConversion = require('./code-conversion');
var emConversion = require('./em-conversion');


module.exports = {
    selector: 'p',
    convert: function(element) {
        'use strict';
        element.children(linkCoversion.selector).each(function () {
            var child = element.find(this);
            element.find(child).replaceWith(linkCoversion.convert(child));
        });
        element.children(codeConversion.selector).each(function () {
            var child = element.find(this);
            element.find(child).replaceWith(codeConversion.convert(child));
        });
        element.children(emConversion.selector).each(function () {
            var child = element.find(this);
            element.find(child).replaceWith(emConversion.convert(child));
        });
        return element.text();
    }
};
