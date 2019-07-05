function getSum(nums, aim) {
  let n0
  let n1
  let minDistance = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[ i ] + nums[ j ] === aim) {
        const distance = Math.abs(i - j)

        if (distance === 1) {
          return [ nums[ i ], nums[ j ]]
        }
        else if (distance < minDistance) {
          minDistance = distance
          n0 = nums[ i ]
          n1 = nums[ j ]
        }
      }
    }
  }

  return n0 === undefined ? undefined : [ n0, n1 ]
}

console.log(getSum([ 1, -2, 3, 0, -6, 1 ], -6))
