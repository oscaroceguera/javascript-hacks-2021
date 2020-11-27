const AL = ['a', 'e', 'i', 'o' , 'u']
const BL = ['b','c','d','f','g']
const CL = ['h','j','k','l','m']
const DL = ['n','p','q','r','s','t','v','w','x','y','z']

function letter (s) {
  
  switch (true) {
    case AL.includes(s.charAt(0)):
      console.log('A')
      break
    case BL.includes(s.charAt(0)):
      console.log('B')
       break
    case CL.includes(s.charAt(0)):
      console.log('C')
       break
 
    default:
      console.log('D')
  }
}

letter('alvaro')
letter('bet')
letter('heri')
letter('pedro')
letter('zwxya')

//other

function getletter (s) {
  let letter
  switch (true) {
    case 'aeiou'.includes(s[0]):
      letter = 'A';
      break;
  case 'bcdfg'.includes(s[0]):
      letter = 'B';
      break;
  case 'hjklm'.includes(s[0]):
      letter = 'C';
      break;
  case 'npqrstvwxyz'.includes(s[0]):
      letter = 'D';
      break;

  }


  return console.log(letter)
}

getletter('alvaro')
getletter('bet')
getletter('heri')
getletter('pedro')
getletter('zwxya')