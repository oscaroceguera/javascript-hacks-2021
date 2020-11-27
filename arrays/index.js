// Access (index into) an array item
let myArr = ['first', 'second']

let first = myArr[0]
let last = myArr[myArr.length - 1]

console.log('a[0', first)
console.log('a[a.length - 1]:', last)

console.log('--- loop ---')
// Loop over an array
let myArryLoop = ['first', 'second']
myArryLoop.forEach(function(e, i, array) {
  console.log(i + ' ' + e  + ' '  + array)
})


console.log('--- append to the End of an Array ---')
// append to the End of an Array
const myArrayToPush = ['first', 'second']
myArrayToPush.push('third')
console.log({myArrayToPush})

console.log('--- remove from the end of array ---')
// remove from the end of array
const myArrayToPop = ['first', 'second', 'third']
let removed = myArrayToPop.pop()
console.log('Modifed Array:', myArrayToPop)
console.log('Removed Element:', removed)

console.log('--- remove from the FRONT of array ---')
// remove from the FRONT of array
const myArrayToShift = ['first', 'second', 'third']
let removedShift = myArrayToShift.shift()
console.log('Modifed Array:', myArrayToShift)
console.log('Removed Element:', removedShift)

console.log('--- add to the from the FRONT of array ---')
// add to the from the FRONT of array
const myArrayUnshift = ['first', 'second', 'third']
let removedUnShift = myArrayUnshift.unshift('four')
console.log('Modifed Array:', myArrayUnshift)

console.log('--- find the index of an item in the array ---')
// find the index of an item in the array
const myArrayIndex = ['first', 'second', 'third', 'fourth']
let position = myArrayIndex.indexOf('second')
console.log('myArrayIndex', myArrayIndex)
console.log('position', position)

console.log('--- remove an Iten by Index Position ---')
// remove an Iten by Index Position
const myArrayToRemoveByIndex = ['first', 'second', 'third', 'fourth']
console.log('Original Array:', myArrayToRemoveByIndex)

let positionIndex  = 1
let elementsToRemove = 2

// remove elementsToRemove elements starting at position
myArrayToRemoveByIndex.splice(positionIndex, elementsToRemove)
console.log('Modified Array:', myArrayToRemoveByIndex)


console.log('--- Copy an Array ---')
// aCopy an Array
const mmyArrayToCopy = ['first', 'second', 'third']
console.log('mmyArrayToCopy:', mmyArrayToCopy)
let mmyArrayToCopyCopy = mmyArrayToCopy.slice()
console.log('mmyArrayToCopyCopy:', mmyArrayToCopyCopy)


console.log('--- Sort an Array ---')
// aCopy an Array
const a = ['c', 'a', 'd', 'b', 'aa']
const b = [9, 2, 13, 7, 1, 12, 123]
const aa = a.slice();
const bb = b.slice();

// Sort in ascending lexicographical order using a built-in
a.sort()
b.sort()
console.log({a})
console.log({b})

// Sort in descending lexicographical order using a compare function

aa.sort((x, y) => x < y)
bb.sort((x, y) => x < y)
console.log({aa})
console.log({bb})