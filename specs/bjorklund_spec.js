var assert = require('assert');
var bjorklund = require('../bjorklund');

describe('Bjorklund', function() {

  it("returns an array of given length", function() {
    var randomInt = Math.floor(Math.random() * 100);
    assert.equal(bjorklund(randomInt).length, randomInt);
  });

  it("distributes 2 over 4", function() {
    var expected = [0,1,0,1];
    assert.deepEqual(bjorklund(4, 2), expected);
  });

  it("distributes 5 over 13", function() {
    var expected = [0,1,0,0,1,0,1,0,0,1,0,1,0];
    assert.deepEqual(bjorklund(13, 5), expected);
  });

  it("distributes 4 over 4", function() {
    var expected = [1,1,1,1];
    assert.deepEqual(bjorklund(4, 4), expected);
  });

  it("distributes 20 over 4", function() {
    var expected = [1,1,1,1];
    assert.deepEqual(bjorklund(4, 20), expected);
  });

})