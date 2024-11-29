//unary plus operator is a simple plus sign (+)

let x = 10;
let y = +x;

console.log(y); // 10

//the unary plus operator to convert the string '10' to the number 10:

let s = '10';
console.log(+s); // 10

//the unary plus operator (+) converts a boolean value into a number, false to 0 and true to 1.

let f = false,
    t = true;

console.log(+f); // 0
console.log(+t); // 1

//object with the toString() method as follows:

let person = {
  name: 'John',
  toString: function () {
    return '25';
  },
};

console.log(+person);

//object that has the toString() method, JavaScript engine calls toString() method to get the value ('25') and convert it into a number. The following adds the valueOf() method to the person object:

let person1 = {
  name: 'John',
  toString: function () {
    return '25';
  },
  valueOf: function () {
    return '30';
  },
};

console.log(+person1);

//unary minus operator is a single minus sign (-)

let x1 = 10;
let y1 = -x1;

console.log(y1); // -10

//prefix increment operator to add one to a variable:

let age = 25;
++age;

console.log(age); // 26
//It’s equivalent to the following:

// let age = 25;
// age = age + 1;
// console.log(age); // 26

//prefix decrement operator to subtract one from a variable:

let weight = 90;
--weight;

console.log(weight); // 89

//postfix increment or decrement operator changes the value after the statement is evaluated. For example:

let weight1 = 90;
let newWeight = weight1++ + 5;

console.log(newWeight); // 95
console.log(weight1); // 91

let weight2 = 90;

let newWeight2 = weight2-- - 5;

console.log(newWeight2); // 85
console.log(weight2); // 89