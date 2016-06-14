module.exports = {
    selector: 'pre.javascript',
    convert: function(codeBlock) {
        var text = '```\r\n';
        var spans = codeBlock.children('span');
        var spanElements  = new Array(spans.size());
        spans.each(function (index) {
            var span = codeBlock.find(this);
            span.replaceWith(span.text())
        });
        text += codeBlock.text();
        text += '\r\n```';
        return text;
    }
};