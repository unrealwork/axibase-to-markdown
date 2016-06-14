var pConversion = require('./paragraph-conversion');


module.exports = {
    selector: 'ol',
    convert: function(element) {
        'use strict';
        element.children().each(function (index) {
            var child = element.find(this);
            element.find(child).replaceWith((index +1).toString()+ '. ' + pConversion.convert(child));
        });
        return element.text();
    }
};
