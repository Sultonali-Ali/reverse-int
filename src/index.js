module.exports = function reverse (n) {
  let nString = '' + n;
  if (nString[0] === '-') {
      nString = nString.slice(1);
  }
  return +nString.split('').reverse().join('');
};
