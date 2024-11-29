// //comparison operators perform a numeric comparison

// let a = 10, 
//     b = 20; 

// console.log(a >= b);  // false
// console.log(a == 10); // true

// //compares the character codes numerically one by one in the string.

// let name1 = 'alice',
//     name2 = 'bob';    

// let result = name1 < name2;
// console.log(result); // true
// console.log(name1 == 'alice'); // true

// //Note that the toLowerCase() is a method of the String object that converts the string to lowercase.
// let f1 = 'apple',
//     f2 = 'Banana';

// let result1 = f2.toLowerCase() < f1.toLowerCase();
// console.log(result1); // false

// //If one value is a number and the other is not, the comparison operator will convert the non-numeric value into a number and compare them numerically

// console.log(10 < '20'); // true

// console.log("*-*/-/-/-/-/-/-/*/*-+/*-+/*-+/*-+/*-+*-+*-+");
// //If the object doesn’t have the valueOf() method, the toString() method is called instead. For example:

// let apple = {
//   valueOf: function () {
//     return 10;
//   },
// };

// let orange = {
//   toString: function () {
//     return '20';
//   },
// };
// console.log(apple > 10); // false
// console.log(orange == 20); // true


console.log("/*-/*-/*-/*-/*-/*-/*-/*-/*-/*-/*-/*-/*-/*-/*-/*-*-/*-/*-/*-/*-/*-/*-");
//Compare a Boolean with another value
console.log(true > 0); // true
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true

console.log("*******************************************************************");
//null equals undefined. It means that the following expression returns true.

console.log(null == undefined); // true
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//Strict equal (===) and not strict equal (!==)


console.log("10" == 10); // true
console.log("10" === 10); // false