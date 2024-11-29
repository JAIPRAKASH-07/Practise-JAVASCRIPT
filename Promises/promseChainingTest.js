
// api()
//   .then(function(result) {
//     return api2() ;
// }).then(function(result2) {
//     return api3();
// }).then(function(result3) {
//     // do work
// }).catch(function(error) {
//     //handle any error that may occur before this point 
// });


// let promise = new Promise(function (resolve, reject) {
//     resolve(2); 
//  });

//  promise.then( (val)=>{
//     console.log(val);   
//     return val * 2; //promise
//  }, 
// (err)=>{

// })
// .then((res)=>{
//     console.log(res);    
//     return res * 2; //promise
// })
// .then((res)=>{
//     console.log(res);    
// });


//Chaining
// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)
  
//   }).then(function(result) { // (**)
  
//     console.log(result); // 1
//     return result * 2;
  
//   }).then(function(result) { // (***)
  
//     console.log(result); // 2
//     return result * 2;
  
//   }).then(function(result) {
  
//     console.log(result); // 4
//     return result * 2;
  
//   }).then(function(result) {
  
//     console.log(result); // 8
//     return result * 2;
  
//   });



//This not chaining
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   });
  
//   promise.then(function(result) {
//     console.log(result); // 1
//     return result * 2;
//   });
  
//   promise.then(function(result) {
//     console.log(result); // 1
//     return result * 2;
//   });
  
//   promise.then(function(result) {
//     console.log(result); // 1
//     return result * 2;
//   });

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   });

// promise.then((res)=>{
//     console.log(res);    
//    // return res * 2; //promise

//    let promise1 = new Promise(function(resolve, reject) { 
//         resolve(res * 2);
//    });

//    return promise1;
// })
// .then((res)=>{
//     console.log(res);    
// });



//Returning promises
// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 3000);//Mysql Db //Add to Cart
  
//   }).then(function(result) {
//     console.log(result); // 1  
  
//     return new Promise((resolve, reject) => { // (*) //MondoDB //Entering Account Details
//       setTimeout(() => resolve(result * 2), 2000);
//     });
  
//   }).then(function(result) { // (**)
  
//     console.log(result); // 2
  
//     return new Promise((resolve, reject) => {  //Calling External service like Bank API
//       setTimeout(() => resolve(result * 2), 2000);
//     });
  
//   }).then(function(result) { //Order is placed
  
//     console.log(result); // 4
  
//   });

let promise = new Promise(function (resolve, reject) {
    resolve(2); 
 });

//  promise.then( (val)=>{
//     console.log("Success"); 
//  }, 
// (err)=>{
//     console.log("Failure"); 
// });

// let onResolve =  (val)=>{
//     console.log("Success"); 
//  };

//  let onReject = (err)=>{
//     console.log("Failure"); 
// };

// promise.then(onResolve , onReject );

// let onResolve = function (val) {
//     console.log("Success"); 
//  };

//  let onReject = function (err) {
//     console.log("Failure"); 
// };

// promise.then(onResolve , onReject );

function onResolve (val) {
    console.log(val);    
    console.log("Success"); 
 };

function onReject (err) {
    console.log("Failure"); 
};

promise.then(onResolve , onReject );
