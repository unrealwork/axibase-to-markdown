'use strict';
var jsdom = require('jsdom');
var logger = require('npmlog');
var JQuery = require('jquery');


function AxibaseParser(source) {
    this._source = source;
    this.transformations = [];
    this.sourceToElement(this._source, function (err, window) {
        AxibaseParser._window = window;
        AxibaseParser.$ = JQuery(AxibaseParser._window);
        AxibaseParser._postElement = AxibaseParser.$('div.post-entry');
    });
    this.addTransformation(require('../conversions/header-conversion'));
    this.addTransformation(require('../conversions/link-conversion'));
    this.addTransformation(require('../conversions/paragraph-conversion'));
    this.addTransformation(require('../conversions/img-conversion'));
    this.addTransformation(require('../conversions/ul-conversion'));
    this.addTransformation(require('../conversions/table-conversion'));
}

AxibaseParser.prototype.addTransformation = function (transformatrion) {
    this.transformations.push(transformatrion);
};

AxibaseParser.prototype.sourceToElement = function (source, callback) {
    jsdom.env(
        source.toString(),
        [],
        function (err, window) {
            callback(err, window);
        }
    );
};

AxibaseParser.prototype._postElement = function (window) {
    var $ = JQuery(window);
    var POST_SELECTOR = 'div.post-entry';
    var postElements = $(POST_SELECTOR);
    return (postElements.length > 0) ? postElements[0] : null;
};

AxibaseParser.prototype.isBlogPost = function () {
    return (AxibaseParser._postElement !== null);
};


AxibaseParser.prototype.translate = function () {
    var markdown = '';
    var self = this;
    var postElements = this.postElements();
    var mdElements = [];
    while (postElements.size() > 0) {
        var element = postElements.first();
        for (var i = 0; i < this.transformations.length; i++) {

            var transformation = this.transformations[i];
            if (element.is(transformation.selector)) {
                mdElements.push(transformation.convert(element));
                postElements.find(element.children()).remove();
                postElements.first().remove();
                postElements = this.postElements();
                break;
            }
        }
    }
    for (var i = 0; i < mdElements.length; i++) {
        markdown += mdElements[i];
        if (mdElements[i] !== '') {
            markdown += '\r\n\r\n';
        }
    }
    return markdown;
};

AxibaseParser.prototype.postElements = function () {
    var self = this;
    var elements = AxibaseParser._postElement.find('*');
    var postElements = elements.filter(function () {
        var element = AxibaseParser.$(this);
        for (var index = 0; index < self.transformations.length; index++) {
            var transformation = self.transformations[index];
            if (element.is(transformation.selector)) {
                return true;
            }
        }
        return false;
    });
    return postElements;
};

module.exports = AxibaseParser;






