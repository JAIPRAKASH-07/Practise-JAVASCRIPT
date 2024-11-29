function compareVarLetConst() {
    if (true) {
      var a = 'var scope';
      let b = 'let scope';
      const c = 'const scope';
    
    
    console.log(a);  // Output: 'var scope' (accessible outside the block)
    console.log(b);  // ReferenceError: b is not defined (block-scoped)
    console.log(c);  // ReferenceError: c is not defined (block-scoped)
    }
  }
  
  compareVarLetConst();
  