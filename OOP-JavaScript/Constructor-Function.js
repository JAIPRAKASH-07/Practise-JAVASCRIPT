//define 
//Before ES6 classes, constructor functions were used to create objects with a specific structure.
// The new keyword is used to create a new instance of the object.

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, " + this.name);
  };
  
  let john = new Person("John", 30);
  john.greet(); 