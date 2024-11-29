class MathUtils {
    // Static property
    static PI = 3.141592653589793;
  
    // Static method
    static add(a, b) {
      return a + b;
    }
  
    // Static method
    static multiply(a, b) {
      return a * b;
    }
  
    // Static method to calculate the area of a circle
    static circleArea(radius) {
      return MathUtils.PI * radius * radius;
    }
  }
  
  // Access static property
  console.log(MathUtils.PI); // Output: 3.141592653589793
  
  // Call static methods
  console.log(MathUtils.add(5, 3));       // Output: 8
  console.log(MathUtils.multiply(4, 6));  // Output: 24
  console.log(MathUtils.circleArea(10));  // Output: 314.1592653589793
  
  // Attempting to access static methods or properties from an instance will result in an error
  const utils = new MathUtils();
  console.log(utils.PI);                // Output: undefined
  console.log(utils.add(5, 3));         // TypeError: utils.add is not a function
  