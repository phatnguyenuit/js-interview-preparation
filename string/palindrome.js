// Palindrome is a word, sentence or character sequence which reads the same as we reverse it.
// Like- “mam”, “racecar” etc.

/**
 * Check if word is palindrome
 * @param {string} str
 */
function isPalindrome(str) {
  const performanceLabel = `isPalindrome(${JSON.stringify(str)})`;
  console.time(performanceLabel);
  const length = str.length;
  const result = !str.split('').some((character, index, array) => {
    return character !== array[length - 1 - index];
  });
  console.timeEnd(performanceLabel);
  return result;
}

/**
 * Check if word is palindrome
 * @param {string} str
 */
function isPalindromeV2(str) {
  const performanceLabel = `isPalindromeV2(${JSON.stringify(str)})`;
  console.time(performanceLabel);
  const reveredWord = str.split('').reverse().join('');
  const result = reveredWord === str;
  console.timeEnd(performanceLabel);
  return result;
}

console.log(isPalindrome('mam'));
console.log(isPalindromeV2('mam'));
console.log(isPalindrome('racecar'));
console.log(isPalindromeV2('racecar'));
console.log(isPalindrome('test'));
console.log(isPalindromeV2('test'));
