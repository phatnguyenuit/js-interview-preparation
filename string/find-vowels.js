/**
 * Find vowels
 * Expected result: number of vowels in the given string
 */

/**
 * Find number of vowels in the given string
 * @param {string} str String
 */
function findVowels(str) {
  const vowels = 'ueoai';
  return str.split('').reduce((numOfVowels, char) => {
    if (vowels.includes(char)) return numOfVowels + 1;
    return numOfVowels;
  }, 0);
}

console.log(findVowels('hello')); // --> 2
console.log(findVowels('why')); // --> 0
