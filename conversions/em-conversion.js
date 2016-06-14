var linkCoversion = require('./link-conversion');
var codeConversion = require('./code-conversion');


module.exports = {
    selector: 'em',
    convert: function(element) {
        element.children(linkCoversion.selector).each(function () {
            var child = element.find(this);
            element.find(child).replaceWith(linkCoversion.convert(child));
        });
        element.children(codeConversion.selector).each(function () {
            var child = element.find(this);
            element.find(child).replaceWith(codeConversion.convert(child));
        });
        'use strict';
        var text = '> ';
        text += element.text();
        return text;
    }
};
