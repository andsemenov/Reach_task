// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is: O(1)
// Explain: if(statement) - O(1), return - O(1)

module.exports = function createBase(integer) {
  // TODO
  const addTen = integer => integer + 10;
  const subtractTwenty = integer => integer - 20;

  if (integer >= 0) {
    return addTen;
  } else {
    return subtractTwenty;
  }
};
