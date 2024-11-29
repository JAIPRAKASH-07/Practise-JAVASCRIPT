// //JavaScript Array length:- property returns the length (size) of an array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(size);


// //avaScript Array toString():-- JavaScript method toString() converts an array to a string of (comma separated) array values.

// const fruit = ["Banana", "Orange", "Apple", "Mango"];

// fruit.toString();
// console.log(fruit);

//  //Array at():---ES2022 intoduced the array method at():

// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// let fruit1 = fruits1.at(2);
 
// //Get the third element of fruits using []:

// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// let fruit2 = fruits2[2];
 
// console.log(fruit1 ,fruit2 );

// //JavaScript Array join()


// const fruitsJoin = ["Banana", "Orange", "Apple", "Mango"];
// let result = fruitsJoin.join(" * ");
// console.log(result);

// //JavaScript Array pop():- method removes the last element from an array:

// const fruitspop = ["Banana", "Orange", "Apple", "Mango"];
// fruitspop.pop();
// console.log(fruitspop);
// //The pop() method returns the value that was "popped out":

// const fruitspop2 = ["Banana", "Orange", "Apple", "Mango"];
// let fruitpop1 = fruitspop2.pop();
//  console.log(fruitpop1);

//  //JavaScript Array push():- method adds a new element to an array (at the end):
// const fruits_12 = ["Banana", "Orange", "Apple", "Mango"];
// fruits_12.push("Kiwi");
//  console.log(fruits_12);
// //The push() method returns the new array length:

// const fruits_121 = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits_121.push("Kiwi");
//  console.log(length);

//  // shift() method removes the first array element and "shifts" all other elements to a lower index.

// const fruitshift = ["Banana", "Orange", "Apple", "Mango"];
// fruitshift.shift();
// console.log(fruitshift);
// //unshift() method adds a new element to an array
// const fruitsunshift = ["Banana", "Orange", "Apple", "Mango"];
// fruitsunshift.unshift("Lemon");
// console.log(fruitsunshift);

// //Merging Two Arrays
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// //Merging Three Arrays)
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);

//splice() method can be used to add new items to an array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");

//  console.log(fruits);


 //slice() method slices out a piece of an array into a new array:

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
 console.log(citrus);