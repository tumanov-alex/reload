function f(fullArr, partArr) {
  if (fullArr.length === 2) {
    return fullArr[0] === partArr[0]
      ? fullArr[1]
      : fullArr[0]
  }

  const halfLen = Math.floor(fullArr.length / 2)
  const fullHalf = fullArr.slice(0, halfLen)
  const partHalf = partArr.slice(0, halfLen)

  return fullHalf[fullHalf.length - 1] === partHalf[partHalf.length - 1]
    ? f(fullArr.slice(halfLen, fullArr.length), partArr.slice(halfLen, fullArr.length))
    : f(fullHalf, partHalf)
}

console.log(f(
  [0, 1, 2],
  [0, 2],
))
