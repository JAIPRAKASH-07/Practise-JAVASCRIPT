// // Use of undefined variables:

// "use strict";

// x = 1; // error

// //Use of reserved keyword as name:
// "use strict";

// var for = 1; // error
// var if = 1; // error

// //Duplicate property names of an object:
// "use strict";

// var myObj = { myProp: 100, myProp:"test strict mode" }; // error

// //Duplicate parameters:
// "use strict";

// function Sum(val, val){return val + val }; // error

// //Assign values to read-only property:
// "use strict";

// var arr = [1 ,2 ,3 ,4, 5];
// arr.length = 10; // error

// //Modify arguments object:
// "use strict";

// function Sum(val1, val2){
//     arguments = 100; // error
// }

// //Octal literals:
// "use strict";

// var oct = 030; // error

// //with statement:
// "use strict";

// with (Math){
//     x = abs(200.234, 2); // error
// };

// //Eval function to create a variable:
// "use strict";

// eval("var x = 1");// error

//Strict mode can be applied to function level in order to implement strictness only in that particular function.
x = 1; //valid

function sum(val1, val2){
    "use strict";

     result = val1 + val2; //error

    return result;
}

