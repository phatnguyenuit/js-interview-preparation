/**
 * Reverse the given string
 * @param {string} str String
 */
function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse('Hello')); // --> olleh
