//define 
//Encapsulation means bundling the data (variables) and methods (functions) that operate on the data into a single unit (object).
// JavaScript achieves encapsulation through objects and classes.

class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    
    getDetails() {
      return `${this.make} ${this.model}`;
    }
  }
  
  let car = new Car("Toyota", "Corolla");
  console.log(car.getDetails()); 
  