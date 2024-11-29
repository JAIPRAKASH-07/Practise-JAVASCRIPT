// function divide(a, b) {
//     if (b === 0) {
//       // Throw an error if the divisor is zero
//       throw new Error("Cannot divide by zero.");
//     }
//     return a / b;
//   }
  
//   try {
//     console.log(divide(10, 2)); // This will work and output 5
//     console.log(divide(10, 0)); // This will throw an error
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
  
 
// try {
//     register(10);//error pron code
// } catch (error) {
//   console.log(error);    
// }

// console.log("I am at end of programme");


// function register(age){
//     try {       
    
//      if(age >= 18){
//          console.log("Pls register");        
//      }else{
//          throw new Error("Age should be 18 years");
//          //dont write any code here, it is unreachable
//      }

//     } catch (error) {
//         console.log("I am in register catch block");        
//     }
//  }
 
//  try {
//      register(10);//error pron code
//  } catch (error) {
//   // console.log(error);    
//   console.log("I am in register outer catch block");
//  } 
//  console.log("I am at end of the programme");

//re-throwing the exception
// function register(age){
//     try {       
    
//      if(age >= 18){
//          console.log("Pls register");        
//      } else {
//          throw new Error("Age should be 18 years");
//          //dont write any code here, it is unreachable
//      }

//     } catch (e) {
//         console.log("I am in register catch block");         
//         throw e;
//     }
//  }
//  register(99)
//  try {
//      register(10);//error pron code
//  } catch (error) { 
//   console.log("I am in register outer catch block");
//  } 
//  console.log("I am at end of the programme");

// function register(age){
//   try {       
  
//    if(age >= 18){
//        console.log("Pls register");        
//    } else {
//        throw new Error("Age should be 18 years");
//        //dont write any code here, it is unreachable
//    }

//   } catch (e) {
//       console.log("I am in register catch block");         
//       throw new Error("It is from register catch block");
//   }
// }

// try {
//    register(10);//error pron code
// } catch (error) { 
// console.log("I am in register outer catch block");
// } 
// console.log("I am at end of the programme");