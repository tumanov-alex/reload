// function fibWait(n, a = 0, b = 1) {
//   if (n === 0) return
//
//   return a < b
//     ? fibWait(n - 1, a + b, b)
//     : fibWait(n - 1, a, b + a)
// }

function logAfter(n) {
  setTimeout(() => console.log(n), n * 1000)
}

function fibWait(n) {
  let a = 0
  let b = 1

  while (n > 0) {
    if (a < b) {
      logAfter(a)
      a += b
    }
    else {
      logAfter(b)
      b += a
    }

    --n
  }
}

fibWait(10)
