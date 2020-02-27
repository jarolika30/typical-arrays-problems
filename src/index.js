
exports.min = function min (array) {
  return (typeof array === 'undefined' || array.length === 0) ? 0 : array.reduce((cur, prev) => Math.min(cur, prev));
}

exports.max = function max (array) {
  return (typeof array === 'undefined' || array.length === 0) ? 0 : array.reduce((cur, prev) => Math.max(cur, prev));
}

exports.avg = function avg (array) {
    return (typeof array === 'undefined' || array.length === 0) ? 0 : (array.reduce((cur, prev) => cur + prev) / array.length);
}
