//define 
//Inheritance allows one class to inherit properties and methods from another class. This enables reusability of code.


class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let dog = new Dog('Rex');
  dog.speak(); 