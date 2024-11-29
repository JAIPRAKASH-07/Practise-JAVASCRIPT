function myFunction() {
    "use strict";  // Strict mode only applies inside this function
    let y = 20;  // ReferenceError: y is not defined
    console.log(y);
    
  }
  console.log(y);
  
  myFunction();
  