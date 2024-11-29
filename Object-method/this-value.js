// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet: function () {
//         console.log('Hello, World!');
//     },
//     getFullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// };


// console.log(person.getFullName());


//JavaScript, you can also use Object.defineProperty() method to add getters and setters. For example,

const student = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah
 
 