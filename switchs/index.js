function swtichDemo (number) {

  switch(number) {
    case 2:
      console.log('A')
      break
    case 3:
      console.log('B')
      break
    case 4:
      console.log('C')
      break
    case 5:
      console.log('D')
      break
    default:
      console.log('E')
  }
}

swtichDemo(1)
swtichDemo(2)
swtichDemo(3)
swtichDemo(4)
swtichDemo(5)

console.log('<<<<< swtichDemoWothoutBreak >>>>>')

function swtichDemoWothoutBreak (number) {

  switch(number) {
    case 2:
      console.log('A')
    case 3:
      console.log('B')
    case 4:
      console.log('C')
    case 5:
      console.log('D')
    default:
      console.log('E')
  }
}

swtichDemoWothoutBreak(3)

console.log('<<<<< swtichDemoMultiCriteria >>>>>')

function swtichDemoMultiCriteria (number) {

  switch(number) {
    case 2:
    case 4:
    case 6:
      console.log('A')
      break
    case 3:
    case 5:
    case 7:
      console.log('B')
      break
    default:
      console.log('C')
  }
}

swtichDemoMultiCriteria(5)