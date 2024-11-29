// //JavaScript Array indexOf():-Search an array for the item "Apple":

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") ;
//  console.log(position);

//  //Array lastIndexOf() -----Search an array for the item "Apple":
 
//  const fruit = ["Apple", "Orange", "Apple", "Mango"];
//  let positions = fruit.lastIndexOf("Apple") ;
//  console.log(positions);
  

//  //Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
//  const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
 
//  let a=fruits1.includes("Mango"); // is true
//  console.log(a);

//  //JavaScript Array find()

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);
// console.log(first);

// function myFunction(value, index, array) {
//   return array > 1;
// }

// //Array findLast() Method

// const temp = [27, 28, 30, 40, 42, 35, 30];
// let high = temp.findLast(x => x > 40);
// console.log(high);

// //Array findLastIndex() Methodssss

// const temp1 = [27, 28, 30, 40, 42, 35, 30];
// let pos = temp1.findLastIndex(x => x > 40);
// console.log(pos);

// //The sort() method sorts an array alphabetically:


// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// let A= fruits2.sort();
// console.log(A);

// //reverse() method reverses the elements in an array:


// const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
// let B=fruits3.reverse();
// console.log(B);

// //combining sort() and reverse(), you can sort an array in descending order:


// const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
// let c=fruits4.sort();
// let d =fruits4.reverse();
// // console.log(c,d);

// //toReversed() Method

const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
console.log(reversed);

// //compare function:Examplencd 
// const points = [40, 100, 1, 5, 25, 10];
// let z=points.sort(function(a, b){return a - b});
// console.log(z);


//Math.min() on an Array:You can use Math.min.apply to find the lowest number in an array:


// function myArrayMin(arr) {
//   return Math.min.apply(null, arr);
// }
//Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).
// let n=myArrayMin([1,2,3]);
// console.log(n);

//(Find Min)
// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {
//     if (arr[len] < min) {
//       min = arr[len];
//     }
//   }
//   return min;
// }
// let NN=myArrayMin([1,2,3,4,5,6,7,8,9]);
// console.log(NN);
 

// GH=[{name:"Ram", age:23,class:5},{name:"Aam", age:20,class:3},{name:"Cam", age:22,class:4},{name:"Dam", age:28,class:4}]
// s=GH.sort;
// console.log(s);