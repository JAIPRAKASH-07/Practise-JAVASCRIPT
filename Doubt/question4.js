//4. **Write a program to find the largest number in an array.**
   
function findLargestNumber(arr) {
    return Math.max(...arr);
  }

  const numbers = [10, 5, 23, 78, 6];
  console.log(findLargestNumber(numbers)); // Output: 78
 

// 5. **Write a function to check if a string is a palindrome.**
 
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }

  console.log(isPalindrome('madam'));  // Output: true
  console.log(isPalindrome('hello'));  // Output: false
  

