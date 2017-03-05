'use strict';
// this is a test file for alpha.js


//mocha's "getting started" 

var assert = require('chai').assert; //utilises and stores a link to chais 'assert'
var alpha = require('./alpha');

describe('alpha', function () {
    describe('point', function () {
        it('should return an object with x:1 and y:2', function () {
            var point = alpha.point;
            assert.typeOf(point, 'object');
            assert.typeOf(point.x, 'number');
            assert.typeOf(point.y, 'number');

            assert.equal(point.x, 1);
            assert.equal(point.y, 2);
        });
    });
    describe('bravo', function () {
        describe('should return x+x when x =', function () {
            it('string', function () {
                var bravo = alpha.bravo;
                assert.typeOf(bravo, 'function');
                assert.equal(bravo('test'), 'testtest');
            });
            it('number', function () {
                var bravo = alpha.bravo;
                assert.equal(bravo(1), 2);
            });
        });
    });
});