function splitWords(words, limit) {
  const split = [ [] ]
  const splitLengths = [ 0 ]

  for (let i = 0, splitLineLength = 0; i < words.length; ++i) {
    if (splitLengths[ splitLengths.length - 1 ] + words[ i ].length + splitLineLength > limit) {
      split.push([])
      splitLengths.push(0)
      splitLineLength = 0
    }

    split[ split.length - 1 ].push(words[ i ])
    ++splitLineLength
    splitLengths[ splitLengths.length - 1 ] += words[ i ].length
  }

  // todo: try removing splitLengths into the getGaps: seems like they're needed there only
  return { split, splitLengths }
}

const makeSpaces = (n) =>
  new Array(n + 1).join(' ')

const merge = (words, gaps) =>
  words.reduce(
    (acc, word, i) => `${acc}${word}${gaps[ i ] || ''}`,
    '',
  )

function splitSpaces(spaces, gaps) {
  if (!spaces || !gaps) return []

  const gapSpaceCount = Math.ceil(spaces / gaps)
  const gapCount = (spaces - (spaces % gapSpaceCount)) / gapSpaceCount

  return [
    ...new Array(Math.floor(gapCount)).fill(makeSpaces(gapSpaceCount)),
    ...splitSpaces(spaces % gapSpaceCount, gaps - gapCount),
  ]
}

function getGaps(split, splitLengths, limit) {
  const gapCount = split.map(l => l.length - 1)
  const gapSpaceCount = splitLengths.map(l => limit - l)
  gapSpaceCount[ gapSpaceCount.length - 1 ] = gapCount[ gapSpaceCount.length - 1 ]

  return gapSpaceCount.map((spaces, i) =>
    splitSpaces(spaces, gapCount[ i ]),
  )
}

function justify(str, limit) {
  const { split, splitLengths } = splitWords(str.split(' '), limit)
  const splitLengthReal = split.length - 1
  const gaps = getGaps(split, splitLengths, limit)

  return split.reduce(
    (acc, words, i) =>
      `${
        acc
      }${
        merge(words, gaps[ i ])
      }${
        i === splitLengthReal ? '' : '\n'
      }`,

    '',
  )
}

// console.log(
//   justify(
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.',
//     30,
//   ),
// )
