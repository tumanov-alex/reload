// todo: rewrite with forEach

function getMaxPrefix(words, size) {
  const prefixes = {}
  let biggest = [ '', 0 ]
  let tmpStr

  for (let i = 0; i < words.length; ++i) {
    tmpStr = words[ i ].substr(0, size)

    prefixes[ tmpStr ] = prefixes[ tmpStr ] ? prefixes[ tmpStr ] + 1 : 1
    biggest = biggest[ 1 ] < prefixes[ tmpStr ]
      ? [ tmpStr, prefixes[ tmpStr ] ]
      : biggest
  }

  return biggest[ 0 ]
}

function getMaxPrefixWords(words, size) {
  const prefixes = {}
  let biggest = [ '', 0 ]
  let tmpStr

  for (let i = 0; i < words.length; ++i) {
    tmpStr = words[ i ].substr(0, size)

    prefixes[ tmpStr ] = prefixes[ tmpStr ]
      ? [ ...prefixes[ tmpStr ], words[ i ] ]
      : [ words[ i ] ]

    biggest = biggest[ 1 ] < prefixes[ tmpStr ].length
      ? [ tmpStr, prefixes[ tmpStr ].length ]
      : biggest

    // if (prefixes[ tmpStr ]) {
    //   prefixes[ tmpStr ].push(words[ i ])
    // } else {
    //   prefixes[ tmpStr ] = [ words[ i ] ]
    // }
  }

  return biggest[ 1 ] > 1
    ? [ biggest[ 0 ], prefixes[ biggest[ 0 ] ] ]
    : null
}

function longestCommonPrefixOld(words) {
  if (
    words.length === 1 ||
    words.every(w => w === words[ 0 ])
  ) return words[ 0 ] || ''

  let singleCharPrefix = getMaxPrefixWords(words, 1)

  if (!singleCharPrefix || singleCharPrefix[ 1 ].length < words.length) return ''

  let tmp
  let size = 2

  while (true) {
    tmp = getMaxPrefixWords(singleCharPrefix[ 1 ], size++)

    if (
      tmp &&
      tmp[ 0 ] !== singleCharPrefix[ 0 ] &&
      tmp[ 1 ].length === singleCharPrefix[ 1 ].length
    ) {
      singleCharPrefix = tmp
    }
    else {
      return singleCharPrefix[ 0 ]
    }
  }
}

function longestCommonPrefix(words) {
  const first = words[ 0 ] || ''

  if (words.every(w => w === first)) return first

  let size = 1

  while (words.every(w => first.substr(0, size) === w.substr(0, size))) {
    size++
  }

  return first.substr(0, size - 1)
}

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return ''
  }

  let prefix = strs[ 0 ]

  for (let i = 1; i < strs.length; i++) {
    while (strs[ i ].indexOf(prefix) !== 0) {
      prefix = prefix.substr(0, prefix.length - 1)

      if (prefix === '') return ''
    }
  }

  return prefix
}

console.log(longestCommonPrefix([ 'a', 'a', 'b' ]))
console.log(longestCommonPrefix([ 'dog', 'racecar', 'car' ]))
console.log(longestCommonPrefix([ 'aa', 'ab' ]))
console.log(longestCommonPrefix([ '', '' ]))
console.log(longestCommonPrefix([ 'flower', 'flow', 'flight' ]))
