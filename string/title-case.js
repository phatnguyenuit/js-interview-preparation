/**
 * Capitalize the first character of each word in the given string
 * @param {string} str
 */
function titleCase(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log(titleCase('phat nguyen')); // --> Phat Nguyen
