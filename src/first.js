const c = require('./constructors')['c']

const n = c.users(10)
const treesWeight = []

const getRoot = (id) => {
  if (n[id] === id)
    return id

  const rootID = getRoot(n[id])
  n[id] = rootID

  return rootID
}

const checkConnection = (id1, id2) =>
  getRoot(id1) === getRoot(id2)

const unite = (id1, id2) => {
  const rootID = getRoot(id1)

  n[id2] = n[rootID]

  !treesWeight[rootID] &&
    (treesWeight[rootID] = 0)

  treesWeight[rootID]++
}

unite(0, 1)
unite(1, 2)

unite(9, 8)
unite(8, 7)

unite(2, 7)

console.log(n)
console.log(treesWeight)
