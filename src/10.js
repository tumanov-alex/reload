// function countDigits(x) {
//   let count = 0
//
//   while (x > 1) {
//     x /= 10
//     count++
//   }
//
//   return count
// }
//
// function getDigit(x, digitCount, nID) {
//   const sooqa = digitCount - nID
//   const withLeftOver = x % Math.pow(10, sooqa)
//   const leftOver = withLeftOver % Math.pow(10, sooqa - 1)
//
//   return (withLeftOver - leftOver) / Math.pow(10, countDigits(withLeftOver) - 1)
// }
//
// function isPalindrome(x) {
//   const count = countDigits(x)
//
//   if (x < 0 || count % 2 === 0) return false
//
//   const halfCount = count / 2
//
//   for (let i = 0; i < halfCount; ++i) {
//     if (getDigit(x, count, i) !== getDigit(x, count, count - i - 1)) {
//       return false
//     }
//   }
//
//   return true
// }

function reverse(x) {
  let res = 0

  while (x >= 1) {
    res = (res + x % 10) * 10
    x = Math.floor(x / 10)
  }

  return res / 10
}

// console.log(reverse(-123454321)) // 0 instead of a reversed num!

function isPalindrome(x) {
  let rev = 0
  let _x = x

  while (_x >= 1) {
    rev = (rev + _x % 10) * 10
    _x = Math.floor(_x / 10)
  }

  return x === (rev / 10)
}

console.log(isPalindrome(123454321))
