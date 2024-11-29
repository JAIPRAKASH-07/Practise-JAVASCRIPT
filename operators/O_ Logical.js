//The Logical NOT operator (!)
let eligible = false,
    required = true;

console.log(!eligible);
console.log(!required);

//the logical ! operator when applying to a non-boolean value:

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

//Double-negation (!!)

let counter = 10;
console.log(!!counter); // true
console.log("!@#$%^&*()_+!@#$%^&*()!@#$%^&*()@#$%^&*()@#$%^&*(@#$%^&*");
//The Logical AND operator (&&)

let eligiblea = false,
    requireda = true;

console.log(eligiblea && requireda); // false
console.log("==================================================");
// && operator is short-circuited
let b = true;
let result = b && (1 / 0);
console.log(result);
console.log("===//////////===============================================");
//The Logical OR operator (||)

let eligibleb = true,
    requiredb = false;

console.log(eligibleb || requiredb); // true