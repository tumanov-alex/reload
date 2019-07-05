const split = (arr, splitter) => {
  const res = []

  for (let i = 0, j = splitter; i < arr.length; i += splitter, j += splitter) {
    res.push(arr.slice(i, j))
  }

  return res
}

// console.log(split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
