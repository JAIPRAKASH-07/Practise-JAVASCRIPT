// // In strict mode, using a variable without declaring it throws an error.
// console.log("some code");

// // 'use strict' is ignored
// // must be at the top
// "use strict";

// x = 21; // does not throw an error



//use strict mode inside a function. For example,

myVariable = 9;
console.log(myVariable); // 9

function hello() {

    // applicable only for this function
    'use strict';

   let  string = 'hello new '; // throws an error
}

 console.log(hello());
