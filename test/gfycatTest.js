/**
 * gfycat tests
 *
 */
"use strict";

var assert = require('assert');
var gfycat = require('../lib/gfycat');

describe('gfycat.getInfo', function () {    
    it('should get info from gfycat provided a URL', function (done) {
        var input      = "http://gfycat.com/SardonicBitterGermanspaniel";
        var success    = function (options) {
            var actual = options.parsed;
            
            assert.equal(actual.gfyItem.gfyName, "SardonicBitterGermanspaniel");
            assert.equal(actual.gfyItem.width, 600);
            assert.equal(actual.gfyItem.height, 560);
            assert.equal(actual.gfyItem.webmUrl, "http://giant.gfycat.com/SardonicBitterGermanspaniel.webm");

            done();
        };
        
        gfycat.getInfo({
            url         : input,
            "done"      : success,
            fail        : function (options) {                
                throw new Error(options.error);
            }
        });
    });
    
    it('should get info from gfycat provided a URL (gif)', function (done) {
        var input      = "http://gfycat.com/SardonicBitterGermanspaniel.gif";
        var success    = function (options) {
            var actual = options.parsed;
            
            assert.equal(actual.gfyItem.gfyName, "SardonicBitterGermanspaniel");
            assert.equal(actual.gfyItem.width, 600);
            assert.equal(actual.gfyItem.height, 560);
            assert.equal(actual.gfyItem.webmUrl, "http://giant.gfycat.com/SardonicBitterGermanspaniel.webm");

            done();
        };
        
        gfycat.getInfo({
            url         : input,
            "done"      : success,
            fail        : function (options) {                
                throw new Error(options.error);
            }
        });
    });
});

describe('gfycat.getID', function () {    
    it('should get the gfycat id from a url', function () {
        var input    = "http://gfycat.com/SardonicBitterGermanspaniel";
        var expected = "SardonicBitterGermanspaniel";
        var actual   = gfycat.getID(input);
        
        assert.equal(expected, actual);
    });
});

describe('gfycat.isGfycatURL', function () {    
    it('should detect gfycat url', function () {
        var input    = "http://gfycat.com/SardonicBitterGermanspaniel";
        var expected = true;
        var actual   = gfycat.isGfycatURL(input);
        
        assert.equal(expected, actual);
    });
    
    it('should NOT detect a NON gfycat url', function () {
        var input    = "http://google.com";
        var expected = false;
        var actual   = gfycat.isGfycatURL(input);
        
        assert.equal(expected, actual);
    });
});



