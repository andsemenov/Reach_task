/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is: O(n)
// Explain: split - O(n), reverse - O(n), join - O(total length of all strings~n)

module.exports = function reverseWordsInSentence(input) {
  // TODO
  return input.split('').reverse().join('').split(' ').reverse().join(' ');
};
