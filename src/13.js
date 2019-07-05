function findMedianSortedArrays(nums1, nums2) {
  const merge = nums1.concat(nums2).sort((a, b) => a - b)

  return merge.length % 2
    ? merge[ Math.ceil(merge.length / 2 - 1) ]
    : (merge[ merge.length / 2 - 1 ] + merge[ merge.length / 2 ]) / 2
}

function f(nums1, nums2) {
  let totalLength = nums1.length + nums2.length
  let i1 = 0
  let i2 = 0
  let curN = null
  let lastN = null

  while (i1 + i2 <= totalLength / 2) {
    if (curN) lastN = curN

    let ele1 = nums1[ i1 ]
    let ele2 = nums2[ i2 ]

    if (ele1 === undefined) {
      curN = ele2
      i2++
    }
    else if (ele2 === undefined) {
      curN = ele1
      i1++
    }
    else if (ele1 < ele2) {
      curN = ele1
      i1++
    }
    else {
      curN = ele2
      i2++
    }
  }

  return totalLength % 2 === 0
    ? (curN + lastN) / 2
    : curN
}

// console.log(findMedianSortedArrays([3], [-2, -1]))
// console.log(findMedianSortedArrays([1, 3], [2]))
console.log(f([ 0, 8 ], [ -5, -3, 10 ]))
