module.exports = {
    selector: 'code',
    convert: function(element) {
        'use strict';
        var text = '`';
        text += element.text();
        text += '`';
        return text;
    }
};
