// In short "this" creates a reference to an object. It may refer to global object i.e.{window object} in global scope
console.log(this)

// And inside an Object to the Object itself
const student = {
  name: 'OSCAR',
  getDetails() {
    console.log(this)
  }
}

student.getDetails()
// {name: "OSCAR", getDetails: f}
// SO that is how "this" gets context by its scope autommatically

// ----

// BUT what if we want to specify the context(environment) of "this" to a specific object.
const religion = {
  type: 'humanity',
  property: 'greatest'
}

function getReligionDetails() {
  console.log(`${this.type} is the ${this.property} religion`);
}

getReligionDetails() // undefined is the undefined religion

// SO here "this" is refering to "window" object (according to its default behaviour in function "this" refers to "winndow" object).
// But we want it to refer to "religion" object. That is where call, apply, bind comes into pictures