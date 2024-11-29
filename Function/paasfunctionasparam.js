function display(){
    console.log("I am in display");
}

function show(){
    console.log("I am in show");
}

function test(a) {
    //console.log(a);
    a();
    console.log("i am in test");
}

//test("Ram");
// test(display);
// test(show);


function display1(message){
    console.log(message);
}

function show1(message){
    console.log(message);
}

function test1(a) {
    // let message = "I am display message"
     let message = "I am show message"
    a(message);
    console.log("i am in test1");
}

// test1(display1);
// test1(show1);



function display2(message){
    console.log(message);//
}

function show2(message){
    console.log(message);
}

function test2(a, message) {
    a(message);
    console.log("i am in test2");
}

//  test2(display2, "I am display");
//  test2(show2, "Hello Bengaluru");

//HW is : write all functions in a arrow funstions and anonymous functions

//  function display3(){
//     console.log("Hey, display3");//
// }

function test3(a) {
    a();
    console.log("i am in test3");
}

// test3(display3);

// test3( function display3(){
//     console.log("Hey, display3");
// });

test3( () => {
    console.log("Hey, display3");
});
