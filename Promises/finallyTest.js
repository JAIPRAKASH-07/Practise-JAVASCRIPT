
// let promise = new Promise(function (resolve, reject) {
//     resolve(2); 
//   // reject("Not a Correct Value");
//  });

//  promise.then(function(val){
//     console.log(val);
//     console.log("Success");    
//  } , function(err){
//     console.log(err);    
//     console.log("Failure");
//  })
//  .finally(function(){
//     console.log("Finally ");    
//  });

// promise.then(function(val){
//     console.log(val);
//     console.log("Success");    
//  })
//  .catch(function(err){
//     console.log(err);    
//     console.log("Failure");
//  })
//  .finally(function(){
//     console.log("Finally ");    
//  });


//How to apply in Promise Chaining

// promise.then(function(val){
//     console.log(val);
//     console.log("Success");    
//  })
//  .catch(function(err){
//     console.log(err);    
//     console.log("Failure");
//  })
//  .finally(function(){
//     console.log("Finally ");    
//  });


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   // setTimeout(() => reject("I am from 1st Promise"), 1000);
//   });

// promise.then((res)=>{
//     console.log(res);  
//    let promise1 = new Promise(function(resolve, reject) { 
//         resolve(res * 2);
//        //reject("I am from 2nd Promise")
//    });

//    return promise1;
//  })
// .then((res)=>{
//     console.log(res);  
//    let promise1 = new Promise(function(resolve, reject) { 
//        // resolve(res * 2);
//       // reject("I am from 3rd Promise")
//    });

//    return promise1;
// })
// .then((res)=>{
//     console.log(res);    
// })
// .catch(function(err){
//     console.log(err);    
//     console.log("Failure");
// })
//  .finally(function(){
//     console.log("Finally ");    
//  });


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   // setTimeout(() => reject("I am from 1st Promise"), 1000);
//   });

// promise.then((res)=>{
//     console.log(res);  
//    let promise1 = new Promise(function(resolve, reject) { 
//         resolve(res * 2);
//      //  reject("I am from 2nd Promise")
//    });

//    return promise1;
// })
// .catch(function(err){
//     console.log(err);    
//     console.log("1St Catch ");
// })
// .then((res)=>{
//     console.log(res);  
//    let promise1 = new Promise(function(resolve, reject) { 
//        // resolve(res * 2);
//        reject("I am from 3rd Promise")
//    });

//    return promise1;
// })
// .then((res)=>{
//     console.log(res);    
// })
// .catch(function(err){
//     console.log(err);    
//     console.log("End catch");
// })
//  .finally(function(){
//     console.log("Finally ");    
//  });



// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   // setTimeout(() => reject("I am from 1st Promise"), 1000);
//   });

// promise.then((res)=>{
//     console.log(res);  
//    let promise1 = new Promise(function(resolve, reject) { 
//         resolve(res * 2);
//      //  reject("I am from 2nd Promise")
//    });

//    return promise1;
// })
// .catch(function(err){
//     console.log(err);    
//     console.log("1St Catch ");
// })
// .then((res)=>{
//     console.log(res);  
//    let promise1 = new Promise(function(resolve, reject) { 
//        // resolve(res * 2);
//        reject("I am from 3rd Promise")
//    });

//    return promise1;
// })
// .catch(function(err){
//     console.log(err);    
//     console.log("End catch");
// })
// .then((res)=>{
//     console.log(res);    
// })
// .catch(function(err){
//     console.log(err);    
//     console.log("End catch");
// })
//  .finally(function(){
//     console.log("Finally ");    
//  });


//  //async and await
 
