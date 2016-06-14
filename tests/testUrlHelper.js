'use strict';

var chai = require('chai');
var expect = chai.expect;
var urlHelper = require('../helpers/url-helper');

describe('urlHelper test', function() {
    it('pageSource', function(done) {
        urlHelper.pageSource('', function(err, data) {
            setTimeout(done, 4000);
            expect(err).to.be.null;
            expect(data).to.be.not.null;
            done();
        });
    });
});

