'use strict';
// this is a test file for index.js


//mocha's "getting started" 
var assert = require('chai').assert; //utilises and stores a link to chais 'assert'
var request = require('superagent');

let website = 'http://localhost:3000';

describe('index', function () {
    describe('/point', function () {
        it('should return an object with x:1 and y:2', function (done) {
            request
                .get(website + '/point')
                .end(function (err, res) {
                    var point = res.body;
                    assert.equal(err, null);
                    assert.equal(res.status, 200);//test to check the http request went A ok
                    assert.typeOf(point, 'object');
                    assert.typeOf(point.x, 'number');
                    assert.typeOf(point.y, 'number');
                    assert.equal(point.x, 1);
                    assert.equal(point.y, 2);
                    done();
                });
        });
    });
    describe('/bravo/:value', function () { // remember to make server requests async
        describe('should return :value:value when :value =', function () {
            it('string', function (done) {
                request
                    .get(website + '/bravo/test')
                    .end(function (err, res) {
                        assert.equal(err, null);
                        assert.equal(res.status, 200);
                        var alphaReturn = res.body;// this is an object with a string in it.
                        assert.typeOf(alphaReturn, 'object');
                        assert.typeOf(alphaReturn.data,'string');
                        assert.equal(alphaReturn.data, 'testtest');
                        done();
                    });
            });
            it('number', function (done) {
                request
                    .get(website + '/bravo/1')
                    .end(function (err, res) {
                        assert.equal(err, null);
                        assert.equal(res.status, 200);
                        var alphaReturn = res.body;// this is an object with a number in it.
                        assert.typeOf(alphaReturn,'object');
                        assert.typeOf(alphaReturn.data,'number');
                        assert.strictEqual(alphaReturn.data,2);
                        done();
                    });
            });
        });
    });
});