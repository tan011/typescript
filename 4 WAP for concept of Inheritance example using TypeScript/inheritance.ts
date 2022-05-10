class Car {
  Color: string;
  constructor(color: string) {
    this.Color = color;
  }
}
class Merbz extends Car {
  Price: number;
  constructor(color: string, price: number) {
    super(color);
    this.Price = price;
  }
  display(): void {
    console.log("Color of Mercedes-Benz car: " + this.Color);
    console.log("Price of Mercedes-Benz car: " + this.Price);
  }
}
let obj = new Merbz(" Silver", 7000000);
obj.display();
