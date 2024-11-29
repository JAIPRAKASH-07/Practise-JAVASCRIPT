//define of object 
//Objects are collections of properties and methods. 
//Properties are variables that belong to the object, and methods are functions that belong to the object.

let person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  person.greet(); 
  