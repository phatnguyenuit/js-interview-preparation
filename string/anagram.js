/**
 * A word is an anagram of another word if they are using the same letters
 * with the same quantity, but arranged differently.
 */

/**
 * Check if two strings are anagram of each other
 * @param {string} str
 * @param {string} str2
 */
function anagram(str, str2) {
  return (
    str.length === str2.length &&
    str.split('').every((char) => str2.includes(char))
  );
}

console.log(anagram('fried', 'fired'));
console.log(anagram('listen', 'bye'));
