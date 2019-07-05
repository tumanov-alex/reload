// function removeElement(nums, val) {
//   return nums.reduce(
//     (acc, n) => acc += Number(n !== val),
//     0,
//   )
// }

function lengthOfLongestSubstring(s) {
  let hash = new Set()
  let size = 0

  for (let i = 0; i < s.length; ++i) {
    debugger
    if (hash.has(s[ i ])) {
      size = Math.max(size, hash.size)

      hash = new Set([ s[ i ] ])
    }
    else {
      hash.add(s[ i ])
    }
  }

  return Math.max(size, hash.size)
}

console.log(lengthOfLongestSubstring('dvdf'))
// console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring('au'))
// console.log(lengthOfLongestSubstring(''))
// console.log(lengthOfLongestSubstring(' '))
