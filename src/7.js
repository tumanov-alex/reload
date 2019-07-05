function delay() {
  const n = Math.floor(Math.random() * 10)

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(n), n * 100)
  })
}

// synchronous && parallel

async function f() {
  return (
    await Promise.all([delay(), delay()])
  ).reduce((acc, n) => acc + n, 0)
}

f().then(res => console.log(res))
