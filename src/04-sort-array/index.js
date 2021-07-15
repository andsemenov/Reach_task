/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is: worst - sorting, average - validation of input
// Explain: sorting -O(n^2), validation - O(n), where n - number of elements of array

/* module.exports = function sortArray(arr) {
  // TODO
  if (Array.isArray(arr) && !arr.length) {
    return [];
  }
  arr.forEach(element => {
    if (typeof element !== 'number' || element % 1 !== 0) {
      throw new TypeError();
    }
  });
  return arr.sort(function (a, b) {
    return a - b;
  });
}; */

module.exports = function sortArray(arr) {
  // TODO
  if (Array.isArray(arr) && !arr.length) {
    return [];
  }

  for (let value of arr) {
    if (typeof value !== 'number' || value % 1 !== 0) {
      throw new TypeError();
    }
    value += 1;
  }

  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
  return arr;
};
