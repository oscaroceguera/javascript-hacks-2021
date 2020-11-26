/*
  Static methods are methods relevant to all instances of a class — not just any one instance.
  These methods receive information from their arguments and not a class instance, which allows
  us to invoke a class' static methods without creating an instance of the class. In fact,
  we actually can't call a static method on an instantiated class object (attempting to do so throws a TypeError).

  We define a class' static methods using the static keyword. We typically use these methods to create utility
  functions for applications, as they can't be called on class objects.
*/

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy)
  }
} 

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)

// The correct way to call a static method
console.log(Point.distance(p1, p2))

// Attempt to call a static method on an distance o f class
try {
  console.log(p1.distance(p1, p2))
} catch (exception) {
  console.log(exception.name + ': ' + exception.message)
}