/**
 * Find all number pairs that its sum is equal to sumValue
 * @param {number[]} nums
 * @param {number} sumValue
 */
function findNumberPairs(nums, sumValue) {
  const output = [];
  const sumsLookup = {};

  for (let i = 0; i < nums.length; i++) {
    const targetValue = sumValue - nums[i];

    if (sumsLookup[targetValue]) {
      output.push([nums[i], targetValue]);
    }

    sumsLookup[nums[i]] = true;
  }

  return output;
}

console.log(findNumberPairs([0, 1, 2, 3, 4, 5, 6], 5)); // => [ [ 3, 2 ], [ 4, 1 ], [ 5, 0 ] ]
