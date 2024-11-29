let x =[10, 20, 30, 40,50,60,70];

// console.log(x[0]);
// console.log(x[3]);
// console.log(x[-1]);
// console.log(x[4]);


// let x1 =[10, "20", 30, "Hello"];
// console.log(x1[0]);
// console.log(x1[1]);
// console.log(x1[2]);
// console.log(x1[3]);

// let x2 = [];
// console.log(x2[1]);


// let arr = new Array(10, 20, 40, 50);
// console.log(arr);
// console.log(arr[0]);

// let student = [
//     {name: "Ramesh", age: 30, city: "Bengaluru"},
//     {name: "Suresh", age: 20, city: "Chennai" },
//     {name: "Mahesh", age: 40, city: "Hyderabad" }
// ];

// console.log(student[0]);
// console.log(student[1]);
// console.log(student[2]);

// let t1 = "Yathish";
// let t2 = 40;
// let t3 = 'Paramesh';

// let ts = ["Yathish", 40, "Paramesh"];
// let ts1 = [t1, t2, t3];
// console.log(typeof ts ,typeof ts1);

// var fn1 = function() {
//     console.log("I am in fn1 function");
// }

// function fn2() {
//     console.log("I am in fn2 function");
// }

// const fn3 = () => {
//     console.log("I am in fn3 function");
// }

// let fns = [fn1, fn2, fn3];
//  //let resfn1 = fns[0];
//  for (const i of fns) {
//     console.log(i()); 
//  }

 //resfn1();

//  var fn11 = function() {
//     console.log("I am in fn1 function");
//     return 10;
// }

// function fn21() {
//     console.log("I am in fn2 function");
//     return 21;
// }

// const fn31 = () => {
//     console.log("I am in fn3 function");
//     return 31;
// }

// let fns1 = [fn11(), fn21(), fn31()];
// console.log(fns1);


// console.log(av1.length);
// console.log(typeof  av1);

// for (let i = 0; i < av1.length; i++) {
//     const element = av1[i];
//     console.log(element);
// }

// //for-of
// for (const element of av1) {
//     console.log(element);
// }

// for (const key in av1) {
//     console.log(key, av1[key]);
// }

// function fn5() {
//    // console.log(a, b, c);
//     console.log(arguments);

//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element);
//     }
// }
//  let av1 = [10, 20, 30, 40, 50,60,70,80,90,100];
// av1.forEach(element => {
//        let index = av1.length;
//     console.log( element,index);
// });

//fn5(10,20,30,40,50);

let av11 = [10, 20, 30, 40];
av11.forEach(()=>{
    console.log();
});

let fef = (a)=> {
    console.log("I am in fef");
    console.log(a);
}

// av11.forEach(fef);
// let array =[1,2,3,4,5,6,7,8,9,10]
// for (let index = 0; index < array.length; index++) {
//     let element = array[index];
//     if (element%2!=0) {
// console.log(element);        
//     }
// }