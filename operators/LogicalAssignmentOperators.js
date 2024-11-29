//Logical OR assignment operator

// let title;
// title ||= 'untitled';

// console.log(title);

let title = 'JavaScript Awesome';
title ||= 'untitled';

console.log(title);

//Logical AND assignment operator

let person = {
    firstName: 'Jane',
    lastName: 'Smith',
};

person.lastName &&= 'Doe';

console.log(person);

//nullish coalescing assignment operator

let user = {
    username: 'Satoshi'
};
user.nickname ??= 'anonymous';

console.log(user);