const add = (promiseX, promiseY) =>
  Promise
    .all([ promiseX, promiseY ])
    .then(data => data[ 0 ] + data[ 1 ])

const fetchN = (n) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(n), 1000),
  )

add(
  fetchN(10),
  fetchN(20),
)
  .then(
    res => console.log(res),  // 30
    err => console.error(err)
  )
