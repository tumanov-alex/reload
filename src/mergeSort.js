function mergeSort(arr, arr2) {
  // debugger
  if (arr.length < 2) return arr
  else if(arr2.length) {
    const biggerHalf = Math.ceil(arr.length / 2)

    return mergeSort(
      arr.slice(0, biggerHalf),
      arr.slice(biggerHalf + 1, arr.length),
    )
  }
  else {



    return arr[ 0 ] > arr[ 1 ]
      ? [ arr[ 1 ], arr[ 0 ] ]
      : [ arr[ 0 ], arr[ 1 ] ]
  }
}
