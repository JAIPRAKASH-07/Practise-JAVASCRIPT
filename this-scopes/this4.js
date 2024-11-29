function greet() {
    console.log('Hello, my name is ' + this.name);
}

const person = {
    name: 'John',
    sayHello: greet
};

const anotherPerson = {
    name: 'Alice'
};

greet(); 
person.sayHello(); 
greet.call(anotherPerson); 
