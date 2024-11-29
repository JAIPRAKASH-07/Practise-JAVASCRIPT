function testVar() {
    console.log(x);  // Output: undefined (due to hoisting)
    var x = 5;
    console.log(x);  // Output: 5
  }
  
  testVar();
  