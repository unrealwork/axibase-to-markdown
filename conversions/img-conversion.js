module.exports = {
    selector: 'img',
    convert: function(element) {
        'use strict';
        var text = '![](';
        text += (element.attr('src') + ')');
        return text;
    }
};
