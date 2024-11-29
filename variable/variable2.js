function testLet() {
   // console.log(x);  // ReferenceError: x is not defined (because of temporal dead zone)
    let x = 5;
    console.log(x);  // Output: 5
  }
  
  testLet();
  