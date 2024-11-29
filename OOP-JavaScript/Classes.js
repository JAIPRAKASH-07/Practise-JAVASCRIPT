//define
//Introduced in ES6, classes are blueprints for creating objects. 
//They define properties and methods that the object will have.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  let john = new Person('John', 30);
  john.greet(); // Outputs: Hello, my name is John
  
