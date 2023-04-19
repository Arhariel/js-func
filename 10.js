class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  }
  
  class Rectangle extends Shape {
    constructor(color, width, height) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Square extends Rectangle {
    constructor(color, sideLength) {
      super(color, sideLength, sideLength);
      this.sideLength = sideLength;
    }
  }
  
  const rectangle = new Rectangle("green", 11, 2);
  console.log(rectangle.getColor()); 
  console.log(rectangle.getArea()); 
  console.log(rectangle.getPerimeter()); 
  
  const square = new Square("white", 4);
  console.log(square.getColor()); 
  console.log(square.getArea()); 
  console.log(square.getPerimeter()); 
  