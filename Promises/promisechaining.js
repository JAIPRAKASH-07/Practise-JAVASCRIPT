
api().then(function(result) {
    return api2() ;
}).then(function(result2) {
    return api3();
}).then(function(result3) {
    // do work
}).catch(function(error) {
    //handle any error that may occur before this point 
});

promiseObject.then(onFulfilled, onRejected);

// returns a promise
let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 
 // executes when promise is resolved successfully
 countValue.then(
     function successValue(result) {
         console.log(result);
     },
  )
 
 // executes if there is an error
 .catch(
     function errorValue(result) {
         console.log(result);
     }
 );

 // returns a promise

// let countValue = new Promise(function (resolve, reject) {
//     resolve("Promise resolved");
//   });
  
//   // executes when promise is resolved successfully
  
//   countValue
//     .then(function successValue(result) {
//       console.log(result);
//     })
  
//     .then(function successValue1() {
//       console.log("You can call multiple functions this way.");
//     });

//     // returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     // could be resolved or rejected   
//     resolve('Promise resolved'); 
// });

// // add other blocks of code
// countValue.finally(
//     function greet() {
//         console.log('This code is executed.');
//     }
// );

// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)
  
//   }).then(function(result) { // (**)
  
//     alert(result); // 1
//     return result * 2;
  
//   }).then(function(result) { // (***)
  
//     alert(result); // 2
//     return result * 2;
  
//   }).then(function(result) {
  
//     alert(result); // 4
//     return result * 2;
  
//   });


//   //This not chaining
//   let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   });
  
//   promise.then(function(result) {
//     alert(result); // 1
//     return result * 2;
//   });
  
//   promise.then(function(result) {
//     alert(result); // 1
//     return result * 2;
//   });
  
//   promise.then(function(result) {
//     alert(result); // 1
//     return result * 2;
//   });


// //Returning promises
// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000);
  
//   }).then(function(result) {
  
//     alert(result); // 1
  
//     return new Promise((resolve, reject) => { // (*)
//       setTimeout(() => resolve(result * 2), 1000);
//     });
  
//   }).then(function(result) { // (**)
  
//     alert(result); // 2
  
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
  
//   }).then(function(result) {
  
//     alert(result); // 4
  
//   });


