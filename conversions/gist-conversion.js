module.exports = {
    selector: 'div.oembed-gist',
    convert: function(element) {
        'use strict';
        return element.get(0).innerHTML;
    }
};
