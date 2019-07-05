// function reverse (x) {
//   let rev = 0
//
//   while (x !== 0) {
//     rev = rev * 10 + x % 10
//
//     x = Math[x < 0 ? 'ceil' : 'floor'](x / 10)
//   }
//
//   return rev
// }

function reverse(x) {
  let res = 0
  let _x = Math.abs(x)

  while (_x >= 1) {
    res = (res + _x % 10) * 10
    _x = Math.floor(_x / 10)
  }

  if ((res / 10) > 2147483647) {
    return 0
  }

  return res / 10 * (x > 0 ? 1 : -1)
}

console.log(1534236469)
console.log(reverse(1534236469))
console.log('')
console.log(reverse(-123))
// console.log(reverse(-321))


// class Solution {
//   public int reverse(int x) {
//   int rev = 0;
//   while (x != 0) {
//   int pop = x % 10;
//   x /= 10;
//   if (rev > Integer.MAX_VALUE/10 || (rev == Integer.MAX_VALUE / 10 && pop > 7)) return 0;
//   if (rev < Integer.MIN_VALUE/10 || (rev == Integer.MIN_VALUE / 10 && pop < -8)) return 0;
//   rev = rev * 10 + pop;
// }
// return rev;
// }
// }
