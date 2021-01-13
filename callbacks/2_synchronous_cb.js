function map(array, callback) {
  console.log('map() starts')
  const mappedArray = []
  for (const item of array) {
    mappedArray.push(callback(item))
  }
  console.log('map() complete')
  return mappedArray
}

function greet(name) {
  console.log('greet() called')
  return `Hello, ${name}!`;
}

const persons = ['Oscar', 'OScarin', 'Dulce']

const elMap = map(persons, greet)
console.log("🚀 ~ file: 2_synchronous_cb.js ~ line 18 ~ elMap", elMap)