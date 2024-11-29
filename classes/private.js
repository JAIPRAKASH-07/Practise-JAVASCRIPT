class Person {
    // Private fields
    #name;
    #age;
  
    // Constructor
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    // Public method
    greet() {
      console.log(`Hello, my name is ${this.#name} and I am ${this.#age} years old.`);
    }
  
    // Private method
    #celebrateBirthday() {
      this.#age += 1;
      console.log(`Happy birthday ${this.#name}! You are now ${this.#age} years old.`);
    }
  
    // Public method to trigger a private method
    haveBirthday() {
      this.#celebrateBirthday();
    }
  }
  
  // Create an instance of the class
  const person = new Person('Alice', 30);
  
  // Access public methods
  person.greet();       // Output: Hello, my name is Alice and I am 30 years old.
  person.haveBirthday(); // Output: Happy birthday Alice! You are now 31 years old.
  
  // Attempt to access private fields or methods from outside the class
  console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
  console.log(person.#celebrateBirthday); // SyntaxError: Private field '#celebrateBirthday' must be declared in an enclosing class
  