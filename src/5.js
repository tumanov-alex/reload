function getCharCounters (text) {
  const chars = {}

  for (let i = 0; i < text.length; ++i) {
    const c = text[i].toUpperCase()

    chars[c] = !!chars[c]
      ? chars[c] + 1
      : 1
  }

  return chars
}

const duplicateCount = (text) =>
  Object.values(getCharCounters(text))
    .filter(count => count > 1)
    .length

console.log(duplicateCount(' a '))
