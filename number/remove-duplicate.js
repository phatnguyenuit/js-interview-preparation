function removeDuplicate(nums) {
  return [...new Set(nums)];
}

console.log(removeDuplicate([1, 2, 3, 3, 4]));
