module.exports = {
    selector: 'a',
    convert: function(element) {
        'use strict';
        var text = '[';
        text += element.text();
        text += '](';
        text += (element.attr('href') + ')');
        return text;
    }
};
