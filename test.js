var sinon = require('sinon')
var chai = require('chai')

var expect = chai.expect

var mongoose = require('mongoose')
require('sinon-mongoose')

var System = require('./src/app/model/System')

describe('Get all systems', function () {
  // Test will pass if we get all todos
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
})
