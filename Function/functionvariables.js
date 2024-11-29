function add(){
    console.log("Welcome");
}

//add();


var x = function (){
    console.log("Welcome to Variable function");
}

//x();

var x1 = function (a, b){
    console.log(a, b);
    console.log("Welcome to Variable function");
}

// x1(10, 20);
// x1();
// x1(10)
// x1(10, 20, 30);

//arrow function

function sub(){
    console.log("Welcome to podbic");
}

//sub();


var s1 = function (){
    console.log("Welcome to podbic");
}

//s1();

// var test = () => {
//     console.log("Welcome to podbic Arrow function");
// }

var test = () => console.log("Welcome to podbic Arrow function");

// test();
// test();

// var test1 = (a) => console.log("Welcome to podbic Arrow function", a);

// var test1 = a => console.log("Welcome to podbic Arrow function", a);
// test1(10);

//var test2 = (a, b) => console.log("Welcome to podbic Arrow function", a, b);
//test2(10, 20);

// var test2 = (a, b) => console.log("Welcome to podbic Arrow function", a+b);
// test2(10, 20);


var test3 = (a, b) => {
                        console.log("Welcome to podbic Arrow function");
                        console.log(a);
                        console.log(b);
                    }
test3(10, 20);
test3("Ram", "20");
