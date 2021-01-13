function greet (name) {
  return `Hello ${name}`;
}

const GREET = greet('Oscar')
console.log("🚀 ~ file: 1_callback_fun.js ~ line 5 ~ GREET", GREET)

const persons = ['Oscar', 'Oscarito', 'Dulce']

const messages = persons.map(greet)
console.log("🚀 ~ file: 1_callback_fun.js ~ line 11 ~ messages", messages)

function map(array, callback) {
  const mappedArray = []
  for (const item of array) {
    mappedArray.push(callback(item))
  }

  return mappedArray
}

const newMessages = map(persons, greet)
console.log("🚀 ~ file: 1_callback_fun.js ~ line 22 ~ newMessages", newMessages)