// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
// console.log(person);

// // The dot notation (.) --objectName.propertyName

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// console.log(person.firstName);
// console.log(person.lastName);


// //Array-like notation ( []) :::objectName['propertyName']

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// console.log(person['firstName']);
// console.log(person['lastName']);


//Modifying the value of a property the assignment operator (=). For example:

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.firstName = 'Jane';

//Adding a new property to an object


person.age = 25;

console.log(person);


//Deleting a property of an object


delete person.age;
console.log(person);

//Checking if a property exists

let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('ssn' in employee);
console.log('employeeId' in employee);