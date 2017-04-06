function bjorklund(slots, pulses) {
  if (!pulses) return Array(slots);
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
    console.log("remainders:", remainders);
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
}
};



module.exports = bjorklund;