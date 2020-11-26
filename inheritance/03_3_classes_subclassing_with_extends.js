class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(this.name, 'speaks.')
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name, 'barks.')
  }
}

let spot = new Dog('spot')
spot.speak()

spot = new Animal('spot')
spot.speak()