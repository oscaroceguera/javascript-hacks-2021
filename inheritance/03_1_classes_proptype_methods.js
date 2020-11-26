class Polygon {
  constructor(height, width) {
      this.height = height;
      this.width = width;
  }
  getArea() {
      return this.height * this.width;
  }
}

const square = new Polygon(10, 10);

console.log(square.getArea());