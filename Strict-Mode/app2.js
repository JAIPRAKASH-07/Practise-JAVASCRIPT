// //Using Strict mode for the entire script: 
// // Whole-script strict mode syntax
// 'use strict';
//  let v = "strict mode script!";
// console.log(v);

 //Using Strict mode for a function
function strict() {

  // Function-level strict mode syntax
  'use strict';

  function nested() {
                return 'Javascript on GeeksforGeeks'; 
  }

  return "strict mode function!  " + nested();
}
console.log(strict());
 
//function notStrict() { return "non strict function"; }
 


