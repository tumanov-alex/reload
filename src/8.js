// https://leetcode.com/problems/two-sum/

// function twoSum(nums, aim) {
//   for (let i = 0; i < nums.length - 1; ++i) {
//     for (let j = i + 1; j < nums.length; ++j) {
//       if (nums[ i ] + nums[ j ] === aim) {
//         return [ i, j ]
//       }
//     }
//   }
// }

const twoSum = function (nums, target) {
  const cache = {}

  for (let i = 0; i < nums.length; i++) {
    if (cache[ nums[ i ] ] >= 0) {

      return [ cache[ nums[ i ] ], i ]
    }

    cache[ target - nums[ i ] ] = i
  }
}

console.log(twoSum([ 2, 5, 5, 11 ], 10))
