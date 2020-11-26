function factorial (n) {
  let numbers = []
  for (let i = 1; i <= n; i++) {
    numbers.push(i)
  }
  const algo = numbers.reduce((acc, curreent) => acc * curreent)
  console.log('🚀 ~ file: factorial.js ~ line 9 ~ factorial ~ algo', algo)
}

factorial(4)
factorial(5)
factorial(50)
factorial(10)