//define 
//Polymorphism allows methods to do different things based on the object calling them.
// In JavaScript, this can be seen through method overriding.

class Animal {
    speak() {
      console.log("Animal makes a noise.");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("Cat meows.");
    }
  }
  
  let animal = new Animal();
  let cat = new Cat();
  
  animal.speak(); 
  cat.speak();    
  
