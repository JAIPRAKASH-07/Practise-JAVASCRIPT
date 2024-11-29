const multiplier = {
    factor: 2
  };
  
  const numbers = [1, 2, 3];
  const doubled = numbers.map(function (num) {
    return num * this.factor;
  }, multiplier);
  
  console.log(doubled);  // Output: [2, 4, 6]
  