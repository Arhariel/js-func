class Tiles {
    constructor(brand, size_h, size_w, price) {
      this.brand = brand;
      this.size_h = size_h;
      this.size_w = size_w;
      this.price = price;
    }
    
    getData() {
      return `Brand: ${this.brand}, Size: ${this.size_h}x${this.size_w}, Price: ${this.price}`;
    }
  }
  
  const tile1 = new Tiles("Buccilini", 5, 10, 2.99);
  const tile2 = new Tiles("Turtovskii", 11, 19, 9.99);
  
  console.log(tile1.getData());
  console.log(tile2.getData());
  