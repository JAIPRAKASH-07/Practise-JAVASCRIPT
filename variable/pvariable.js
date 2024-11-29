// // varabile function and first class function

// let one=function(){
//     console.log("I am in one box");
// }

// let two=function(){
//     console.log("I am in show");
// }

// let three=function(a) {
//     console.log(a);
//    a();
//     console.log("i am in test");
// }

// //three("ram");
// //three(one);
// //three(two);


// let display1=function (message){
//     console.log(message);
// }

// let show1=function (message){
//     console.log(message);
// }

// let test1=function (a) {
//     // let message = "I am display message"
//      let message = "I am show message"
//     a(message);
//     console.log("i am in test1");
// }

//  //test1(display1);
// //test1(show1);



// let display2=function (message){
//     console.log(message);//
// }

// let  show2=function(message){
//     console.log(message);
// }

// function test2(a, message) {
//     a(message);
//     console.log("i am in test2");
// }

//  ///test2(display2, "I am display");
// // test2(show2, "Hello Bengaluru");

// // //HW is : write all functions in a arrow funstions and anonymous functions

// let display3= function(){
//     console.log("Hey, display3");//
// }

// let test3=function (a) {
//     a();
//     console.log("i am in test3");
// }

// // test3(display3);

// test3( function display3(){
//     console.log("Hey, display3");
// });

// test3( () => {
//     console.log("Hey, display3");
// });



// arrow  function 

let onebox=()=>{
    console.log("I am in one box");
}

let twobox=()=>{
    console.log("I am in show");
}

let three=(a) =>{
    console.log(a);
   a();
    console.log("i am in test");
}

//three("ram");
//three(onebox);
//three(twobox);


let display1=(message)=>{
    console.log(message);
}

let show1=(message1) =>{
    console.log(message1);
}

let test1=(a) => {
     let message = "I am display message"
     let message1 = "I am show message"
    a(message);
    console.log("i am in test1");
}

//  test1(display1);
// test1(show1);



let display2=(message)=>{
    console.log(message);//
}

let  show2=(message)=>{
    console.log(message);
}

let  test2 =(a, message)=> {
    a(message);
    console.log("i am in test2");
}

 //test2(display2, "I am display");
test2(show2, "Hello Bengaluru");

// // //HW is : write all functions in a arrow funstions and anonymous functions

// let display3= function(){
//     console.log("Hey, display3");//
// }

// let test3=function (a) {
//     a();
//     console.log("i am in test3");
// }

// // test3(display3);

// test3( function display3(){
//     console.log("Hey, display3");
// });

// test3( () => {
//     console.log("Hey, display3");
// });
