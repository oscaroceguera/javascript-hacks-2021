const myArray = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
]

function getCount(obj) {
  let count = 0;
  for (let i = 0; i < obj.length; i++){
    if (obj[i].x === obj[i].y) {
      count++
    }
  }
  return count
}

console.log(getCount(myArray))