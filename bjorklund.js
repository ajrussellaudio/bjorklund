function Bjorklund() {}

Bjorklund.distribute = function(slots, pulses) {
  if (!pulses && pulses !== 0) return Array(slots);
  if (pulses > slots) pulses = slots;
  var divisor = slots - pulses;
  var remainders = [];
  var counts = [];
  remainders[0] = pulses;
  var level = 0;
  while (remainders[level] > 1) {
    counts[level] = Math.floor(divisor / remainders[level]);
    remainders[level+1] = divisor % remainders[level];
    divisor = remainders[level];
    level++;
  };

  counts.push(divisor);

  var pattern = [];
  buildString(level);
  return pattern;

  function buildString(level) {
    if (level === -1) {
      pattern.push(0)
    } else if (level === -2) {
      pattern.push(1)
    } else {
      for (var i = 0; i < counts[level]; i++) {
        buildString(level-1);
      }
      if (remainders[level] !== 0) {
        buildString(level-2);
      }
    }
  };
};

Bjorklund.offset = function(array) {
  if (!this.containsOne(array)) return array;
  if (array[0] === 1) return array;
  return this.offset(this.rotate(array));
}

Bjorklund.containsOne = function(array) {
  return array.filter(function(item) {
    return item === 1;
  }).length > 0;
}

Bjorklund.rotate = function(array) {
  array.push( array.shift() );
  return array;
}



module.exports = Bjorklund;