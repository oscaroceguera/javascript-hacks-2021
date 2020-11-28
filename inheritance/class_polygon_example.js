class Polygon {
  constructor(lengths) {
    this.lengths = lengths
  }

  perimeter() {
    return this.lengths.reduce((acc, curr) => acc + curr)
  }
}

const triangle = new Polygon([3, 4, 5])
console.log(triangle.perimeter())