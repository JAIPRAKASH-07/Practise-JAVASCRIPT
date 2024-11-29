
// Function declarations
// let x = "hello all"
// function funName(uname, uemail,uphno ){ // starts
//    let obj = {
//     username:x,
//     userEmail:uemail,
//     phno:uphno

//    }
  
//    console.log(obj);
// }//ends
// // Calling functions
// function name ()
// funName("fsgv0","33252","rhfh");

// Function expressions or anonymous function
// let someName =  "Function expressions or anonymous function";
// let name = "anil";
// let age = 18;
// let funExp = function(x,y) {
//     // console.log(`area of a squar ${x*x}`);
//     // console.log('area of a squar ' + x*x);
//     // console.log('area of a squar' , x*x);
//     // console.log(`'area "of" a "s"q"uar"'` , x*x);
//     // console.log("area 'of' a squar" , x*x);
//     // console.log("area 'of' a squar", x*x);
// // console.log("hello ram your are 18 yrs old");
// console.log(`hello ${x} your are ${y} yrs`);
// // console.log("hello" + x + "your are" + y + "yrs");
// }
// funExp(name, age);

// Function hoisting
// console.log(x); //Cannot access 'x' before initialization
// let x = "sndbvjd";
// console.log(x); 
// // Calling functions
// funName("fsgv0","33252","rhfh");
// function funName(uname, uemail,uphno ){ // starts
//    let obj = {
//     username:x,
//     userEmail:uemail,
//     phno:uphno

//    }
  
//    console.log(obj);
// }//ends


 
// Nested functions and closures

// function nestedFun(a,b) {
//     let sum = a+b;
//     function name(sum) {
//         let sq = sum*sum;
//     //   console.log(`square of sum = ${sq}`);
//       return sq;
//     } 
//     console.log( `square of sum = ${name(sum)}`);
// }

// nestedFun(2,4);
// let emp ={
//     name:"anil",
//     email:"anil@gmail.com",
//     phno:"136874126",
// }
// function empDetails(obj, addsk) {
  
//     addsk(obj,"java","nodejs")


    
// }
// function addSkills(obj, a,b,c) {
//     obj.skills = [a,b,c];
//     console.log(obj);
// }
// function addbackend(obj,a,b) {
//     obj.backendSkills = [a,b];
//     console.log(obj);
// }

// empDetails(emp,addbackend);

// call back

// function main(a,b,reqFunName) {
   
//     console.log( reqFunName(a,b));
//     // console.log( sub(5,10));
  
// }
// main(5,10,sub)

// function add(x,y) {
//     return x+y;
// }
// function sub(x,y) {
//     return x-y;
// }
// function mult(x,y) {
//     return x*b;
// }
// cal(3,13,sub)
// cal(3,13,mult)

// arrow functions
// let x = ()=>{
//     console.log("fun");
// }
// x();

let arr = [1,2,3,4,"5",67,7,8]

// arr.forEach(function b(ele){
// console.log(ele);
// }
// )
arr.forEach((e,index)=>{
    // console.log(e, "index: " + index);
    if (parseInt(e) === 5) {
        console.log(e +" is present and index is: "+index  );
    }
})
 
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     // console.log(element);
//     if (element == 5) {
//         console.log(element +" is present and index is: "+i  );
//     }
// }
    