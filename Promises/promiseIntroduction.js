
//promise
//Objcet 
//Pending
//Fulfilled 
//Rejected

// let status1 = false;
//  let promise = new Promise( ( resolve , reject) => {

//     if(status1){
//         //success/ fulfilled
//         resolve("Your Promise is Resolved, Congragulations");//fullfilled
//     }else{
//         //failure/Rejected
//         reject("Sorry, Your Promise is Rejected");//rejected
//     }

//  });

//  console.log(promise);
 

//call the promise
// promise.then(function(data) {
//                 console.log("I am in 1st function of then");    
//                 console.log(data);                
//             } , 
            
//             function(err) {
//                 console.log("I am in 2nd function of then");  
//                 console.log(err);                
//             } 
//         );


//Case 2:
let status1 = true;
 let promise = new Promise( function( resolve , reject) {

    if(status1){
        //success/ fulfilled
        resolve("Your Promise is Resolved, Congragulations");//fullfilled
    }else{
        //failure/Rejected
        reject("Sorry, Your Promise is Rejected");//rejected
    }

 });

//  promise.then(function(data) {
//                     console.log("I am in 1st function of then");    
//                     console.log(data);                
//                 } , 
                
//                 function(err) {
//                     console.log("I am in 2nd function of then");  
//                     console.log(err);                
//                 } 
//             );


//  promise.then((data) => {
//                     console.log("I am in 1st function of then");    
//                     console.log(data);                
//                 } , 
                
//                 (err) => {
//                     console.log("I am in 2nd function of then");  
//                     console.log(err);                
//                 } 
//             );


// promise
//     .then(function(data){
//         console.log(data);        
//     })
//     .catch(function(err){
//         console.log(err);        
//     })

promise
    .then((data) => {
        console.log(data);        
    })
    .catch((err) => {
        console.log(err);        
    })
