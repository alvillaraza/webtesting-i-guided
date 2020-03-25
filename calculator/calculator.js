module.exports = {
  add,
};

//original code
// function add(a, b) {
//   return a + b;
// }

function add(a = 0, b = 0) {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
 } else {
    throw new Error('Both arguments need to be numbers')
  }
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

// start with low hanging fruit --> happy path (your basic assumptions)
// then check for invalid input
// then move on to edge cases
