var x = 100; //global scope

function outer() {
    let y = 200;
    console.log("I am in Outer function"+ (x+ y));//x and y is available but not z
    function inner() {
        let z  = 300;
        console.log("I am in inner function"+(x+y+z));
    }
    inner();
}
//outer();

//x is available but not y and z


function outer1() {
    console.log("I am in Outer1 function"); //2
    function inner1() {
        console.log("I am in inner1 function");//4
    }
    console.log("Hello Hyderabad");//3
    inner1();
    console.log("Tata Bye bye");//5
}
// console.log("welcome to the Bengaluru");//1
// outer1();
// console.log("Mee too Bye bye ");//6


function outer2() {
    console.log("I am in Outer1 function"); //1
    function inner2() {
        console.log("I am in inner1 function");//3
        function deepInner2() {
            console.log("I am in deepInner1 function ");
        }
        deepInner2();
    }
    console.log(" weclocme to the  Hyderabad");//2
    inner2();
    console.log("Tata Bye bye");//4
}
//outer2();

function outer3() {
    function inner3() {
        function deepInner3() {
            console.log("I am in deepInner3 function ");
        }
        deepInner3();
    
     // inner3(); //Not possible
    }
   // deepInner3(); //Not allowed
    inner3();
}
outer3();
