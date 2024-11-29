class Person {
    // Constructor method
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display information
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Static method (called on the class itself, not instances)
    static greet() {
        console.log('Hello from the Person class!');
    }
}

// Creating an instance of the class
const person1 = new Person('Alice', 30);

// Calling a method on the instance
person1.introduce(); // Output: Hello, my name is Alice and I am 30 years old.

// Calling a static method
Person.greet();
