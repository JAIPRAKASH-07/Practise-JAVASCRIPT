// //JavaScript object methods

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// person.greet = function () {
//     console.log('Hello!');
// }

// person.greet();


// //Besides using a function expression, you can define a function and assign it to an object like this:

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// function greet() {
//     console.log('Hello, World!');
// }

// //ES6 provides you with the concise method syntax that allows you to define a method for an object:

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet() {
//         console.log('Hello121212, World!');
//     }
// };

// person.greet();

// the this value in the getFullName() method:

let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, 12121212World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(person.getFullName());