// 6. **Write a program to sum all the numbers in an array.**
  
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log(sumArray(numbers)); // Output: 15
 

//7. **Write a function to find the Fibonacci sequence up to `n` terms.**
  
  function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }

  console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
 

//8. **Write a program to remove duplicates from an array.**

  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

  const nums = [1, 2, 3, 2, 4, 1];
  console.log(removeDuplicates(nums)); // Output: [1, 2, 3, 4]
 