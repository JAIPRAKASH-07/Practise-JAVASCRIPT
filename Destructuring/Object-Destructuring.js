// one way create object desreucturing 
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
let { firstName: fname, lastName: lname } = person;

console.log(fname); // 'John'
console.log(lname); // 'Doe'
console.log("***********************************************************************************");


// 2nd way create 
let person1 = {
    firstName1: 'ram',
    lastName1: 'sita'
};

let { firstName1, lastName1 } = person1;

console.log(firstName1); 
console.log(lastName1); 

















// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     currentAge: 28
// };

// let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

// console.log(middleName); // ''
// console.log(age); // 28