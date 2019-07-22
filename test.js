var sinon = require('sinon')
var chai = require('chai')

var expect = chai.expect

var mongoose = require('mongoose')
require('sinon-mongoose')

var System = require('./src/app/model/System')

describe('Get all systems', function () {
    it('should return all systems', function (done) {
        var SystemMock = sinon.mock(System)
        var expectedResult = []
        SystemMock.expects('find').yields(null, expectedResult)
        System.find(function (err, result) {
            SystemMock.verify()
            SystemMock.restore()
            expect(result).to.be.an('array').that.is.empty
            done()
        })
    })
});

describe('Create a new systems', function () {
    it("should create new system", function (done) {
        var SystemMock = sinon.mock(new System({name: 'Test System', version: '1.0.0', context: 'test-system', tags: 'test'}));
        var system = SystemMock.object;
        var expectedResult = {name: 'Test System', version: '1.0.0', context: 'test-system', tags: 'test'};
        SystemMock.expects('save').yields(null, expectedResult);
        system.save(function (err, result) {
            SystemMock.verify();
            SystemMock.restore();
            expect(result).to.be.an('object').that.is.equal(expectedResult);
            done();
        });
    });
});