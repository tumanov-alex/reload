const sum = (x) =>
  y =>
    y === undefined
      ? sum(x + y)
      : x

// console.log(sum(5)(10)(10)())
