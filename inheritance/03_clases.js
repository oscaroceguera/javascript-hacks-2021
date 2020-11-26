/*
  An important difference between function declarations and class declarations is that function declarations are hoisted 
  (i.e., can be referenced before they're declared) but class declarations are not. This means we must first declare our 
  class before attempting to access (or reference) it; if we fail to do so, our code throws a ReferenceError.
*/

try {
  let p = new Polygon(1,2)
  console.log('Polygon p:', p)
} catch (exceptio) {
  console.log(exceptio.name + ': ' + exceptio.message)
}



class Polygon {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}

let p = new Polygon(1, 2)
console.log('Polygon p:', p)