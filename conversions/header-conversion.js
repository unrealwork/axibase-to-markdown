module.exports = {
    selector: ':header',
    convert: function(element) {
        'use strict';
        var text = '';
        var type = element.get(0).tagName;
        var level = parseInt(type[1].toString());
        for (var i = 0; i < level; i++) {
            text += '#';
        }
        text += ' ';
        text += element.text();
        return text;
    }
};
