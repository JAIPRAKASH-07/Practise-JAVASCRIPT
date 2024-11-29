// let name = "ani";
// let age = 55;
// let student = false;
// let skills;
// let x = null;

// //  skills = ["html", "css", "js","ts"]
// // let person = {
// //     name:name,
// //     age:age,
// //     student:student,
// //     skill:skills,
   
// // }
// // let tech = {
// //     ui:["html", "css", "js"],
// //     "back end":[{
// //          oldversion : "java Old",
// //          "latest version" : "java latest"
// //     }, 
// //     "node" ],
// //     db:["mongodb","sql"]
// // }
// // console.log(person);
// // person.tech = tech;
// // person.skill = "html";
// // // let backendskills  = person.tech['back end'][0];
// // console.log(person);
 
// // console.log(person.tech.backend[0]);
// // console.log(skills[2]);
// // console.log(obj.skill);
// // console.log(obj["skill"]);
// // let obj = {}
// let obj = new Object()
// console.log("new obj" ,obj);

// obj.name = age;
// console.log("new obj" ,obj);

let arr = [1,2,34,4,565,6,8,99,0,"dsdsb"];
// let arr1 = [1,2,34,4,565,6,8,99,0,"dsdsb"];
// index start 0 , length starts from 1
// console.log(arr[0]);
// console.log(arr.length);
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// console.log(arr[arr.length-1]);
// for(let i=0; i < arr.length; i++){
 
// console.log(arr[i]+2);
// }
// arr.splice(0,0,0)
// arr.shift() // remove to first
// arr.unshift(0) // add to first
// arr.push(123) // add to last
// arr.pop() // remove to last
// let x = [23,54]
arr.splice(1,2 , ...x) // replace 

console.log(arr);

//  let x = 10;
// let y = 20;
// if ( arr.length == arr1.length) {
//     console.log("arr's are equal");
// }else{
//     console.log("arr's are not equal");

// }

// var , let ,const
// primitive datatype
var x =10;
let y = 20;
const z = 30;
// console.log(x);
// console.log(y);
console.log(z);
//   y = 120;
//   z = 40;
// var x = 20;
//  console.log(x);
//  console.log(y);
//  console.log(z);
// x = 40;
y = 140;
 function name() {
    // console.log(x);
    // console.log(y);
    // x = 30;
   let y = 50;
   const z = 50;
    // console.log(x);
    // console.log(y);
    console.log(z);
    y = 1;
 }
 name()
 console.log(x);
 console.log(y);
 console.log(z);

// non primitive datatype

let objName = {
    firstName: "hello",
    lastName: "World",
}
   objName.firstName = "anil";
   objName =  {firstName: "hello",}
   console.log(objName);

   let arrayName = []

   arrayName[0]= "hello";
   arrayName.push("world");
   arrayName = [0,1]
   console.log(arrayName);
   const objName = {
    firstName: "hello",
    lastName: "World",
}
   objName.firstName = "anil"
   console.log(objName);

   const arrayName = []

   arrayName[0]= "hello";
   arrayName.push("world");
   console.log(arrayName);

let a = 1;
let b = 2;
function add(a,b){
let c =  a+b;
console.log(c);
}
add(1,3)