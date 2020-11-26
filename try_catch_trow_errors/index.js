function isPositive (num) {
  if (num > 0) {
    return 'YES'
  } else if (num === 0) {
    throw new Error('ZERO Error')
  } else if (num < 0 ) {
    throw new Error('Negative Error')
  }
} 

function tryCatchBehaviour (num) {
  try {
    console.log(isPositive(num))
  } catch (e) {
    console.log(e.message)
  } 
}

tryCatchBehaviour(1)
tryCatchBehaviour(0)
tryCatchBehaviour(-1)
tryCatchBehaviour(10)
tryCatchBehaviour(-41)
tryCatchBehaviour(0)
tryCatchBehaviour(112)
tryCatchBehaviour(-999)