class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
  
    // Getter for the width property
    get width() {
      return this._width;
    }
  
    // Setter for the width property
    set width(value) {
      if (value > 0) {
        this._width = value;
      } else {
        console.log('Width must be a positive number.');
      }
    }
  
    // Getter for the height property
    get height() {
      return this._height;
    }
  
    // Setter for the height property
    set height(value) {
      if (value > 0) {
        this._height = value;
      } else {
        console.log('Height must be a positive number.');
      }
    }
  
    // Method to calculate area
    get area() {
      return this._width * this._height;
    }
  }
  
  // Create an instance of Rectangle
  const rect = new Rectangle(10, 5);
  
  // Access properties using getters
  console.log(rect.width);  // Output: 10
  console.log(rect.height); // Output: 5
  console.log(rect.area);   // Output: 50
  
  // Modify properties using setters
  rect.width = 20;
  rect.height = 10;
  console.log(rect.width);  // Output: 20
  console.log(rect.height); // Output: 10
  console.log(rect.area);   // Output: 200
  
  // Attempt to set invalid values
  rect.width = -5;  // Output: Width must be a positive number.
  rect.height = 0;  // Output: Height must be a positive number.
  