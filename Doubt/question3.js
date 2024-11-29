
//1. **Write a JavaScript function to check if a number is even or odd.**
   
   function checkEvenOdd(num) {
     if (num % 2 === 0) {
       return "Even";
     } else {
       return "Odd";
     }
   }

   console.log(checkEvenOdd(10)); // Output: "Even"
   console.log(checkEvenOdd(7));  // Output: "Odd"
 

// 2. **Write a function to reverse a string.**
  
   function reverseString(str) {
     return str.split('').reverse().join('');
   }

   console.log(reverseString('hello')); // Output: "olleh"
  

// 3. **Write a program to find the factorial of a number.**
  
   function factorial(n) {
     if (n === 0 || n === 1) {
       return 1;
     } else {
       return n * factorial(n - 1);
     }
   }

   console.log(factorial(5)); // Output: 120
   

