var assert = require('assert');
var Bjorklund = require('../bjorklund');

describe('Bjorklund.distribute', function() {

  it("returns an array of given length", function() {
    var randomInt = Math.floor(Math.random() * 100);
    assert.equal(Bjorklund.distribute(randomInt).length, randomInt);
  });

  it("distributes 2 over 4", function() {
    var expected = [0,1,0,1];
    assert.deepEqual(Bjorklund.distribute(4, 2), expected);
  });

  it("distributes 5 over 13", function() {
    var expected = [0,1,0,0,1,0,1,0,0,1,0,1,0];
    assert.deepEqual(Bjorklund.distribute(13, 5), expected);
  });

  it("distributes 4 over 4", function() {
    var expected = [1,1,1,1];
    assert.deepEqual(Bjorklund.distribute(4, 4), expected);
  });

  it("distributes 20 over 4", function() {
    var expected = [1,1,1,1];
    assert.deepEqual(Bjorklund.distribute(4, 20), expected);
  });

  it("doesn't flip out when given 0 as input", function() {
    var expected = [0,0,0,0,0,0,0];
    assert.deepEqual(Bjorklund.distribute(7, 0), expected);
  });

});

describe("Bjorklund.rotate", function() {

  it("rotates an array by one", function() {
    var expected = [0,1,0,0];
    assert.deepEqual(Bjorklund.rotate([0,0,1,0]), expected);
  })

});

describe("Bjorklund.offset", function() {

  it("offsets array to start with 1", function() {
    var expected = [1, 0, 0, 0];
    assert.deepEqual(Bjorklund.offset([0,0,1,0]), expected);
  });

  it("doesn't flip out if array doesn't contain 1", function() {
    assert(Bjorklund.offset([0, 0, 0]));
  });

});

// TODO: Bjorklund.map(high, low)
// TODO: Bjorklund.build(slots, pulses, high, low)