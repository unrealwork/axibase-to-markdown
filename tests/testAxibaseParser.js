'use strict';

var chai = require('chai');
var expect = chai.expect;
var AxibaseParser = require('../helpers/axibase-parser');
var fs = require('fs');
var testDataPath = __dirname + '/data/axibase-parser/';
var jQuery = require('jquery');

var axibaseParser = new AxibaseParser(fs.readFileSync(testDataPath + 'index.html'));

describe('axibaseParser test', function () {

    it('translate', function (done) {
        var markdown = axibaseParser.translate();
        console.log(markdown);

        done();
    });

    it('sourceToElement', function (done) {
        axibaseParser.sourceToElement(axibaseParser._source, function (err, window) {
            expect(window.document).to.be.not.null;
            expect(window.document).to.be.not.undefined;
        });
        done();
    });

    it('postElement', function () {
        var postElement = axibaseParser._postElement;
        expect(postElement).to.be.not.undefined;
    });

    it('postElements', function () {
        var postElements = axibaseParser.postElements();
        expect(postElements).to.be.not.undefined;

    });

    it('isBlog', function (done) {
        expect(axibaseParser.isBlogPost()).to.equal(true);
        done();
    });
});

