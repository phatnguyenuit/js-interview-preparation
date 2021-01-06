/**
 * Replace searchValue the given string by the replaceValue
 * @param {string} str
 * @param {string} searchValue
 * @param {string} replaceValue
 */
function replace(str, searchValue, replaceValue) {
  return str.replace(searchValue, replaceValue);
}

console.log(replace('Phat nguyen', 'u', 'o')); // --> Phat ngoyen
