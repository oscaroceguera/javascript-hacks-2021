const persons = ['oscar', 'oscarito', 'dulce', 'sofia']

persons.forEach(
  function callback(name) {
    console.log(`--- ${name} ---`)
  }
)

const nameStartingO = persons.find(
  function callback(name) {
    return name[0].toLowerCase() === 'o'
  }
)

console.log('nameStartingO => ' + nameStartingO)

const countStartingO = persons.reduce(
  function callback(count, name) {
    const startsO = name[0].toLowerCase() === 'o'
    return startsO ? count + 1 : count;
  },
  0
)
console.log("🚀 ~ file: 2.1_synchronous_cb.js ~ line 23 ~ countStartingO", countStartingO)