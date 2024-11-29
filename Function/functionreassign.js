function display() {
    console.log("I am in display function");
}

//display();

// let x = display;
// x();
// display();

var fn = function() {
    console.log("I am in variable function");
}
//fn();

let m = fn;//assigning the function to a variable
// m(); //calling the function
// fn();

let af = () => {
    console.log("Hello arrow function");
}

//af();

// const b = af;
// b();
// af();


var ramu = function (){
    console.log("I am Ramu");
}

// ramu();

var remo = function (){
    console.log("I am Remo");
}
//remo();

var aparchithudu = function (){
    console.log("I am Aparchithudu");
}

//aparchithudu();

let vikram;

//10 min 
vikram = ramu;
//vikram();

//20min roses loverboy
//vikram = remo;
//vikram();

//40 min
//railway station 
vikram = aparchithudu;
vikram();

//tomorrow s topics
//passing function as a parameter
function test3(a, d) {
    
}

//test3()

//default parametrs
//return types
// Nested FUnctions
//Hoisting

UseMe = "Rama"
console.log(UseMe);
var UseMe;

