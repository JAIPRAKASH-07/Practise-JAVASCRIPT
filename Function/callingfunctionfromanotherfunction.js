
function display(){
    touch();
    console.log("Welcome");//6
}

function show(){
    greet();
    console.log("I am in Show function");//3
    touch();
}

function greet(){
    console.log("I am in greet function");//2
}

function touch(){
    console.log("I am in touch function");//4 //5
}

function test(){
    console.log("I am in test function");//1
    show();
    display();  
}

console.log("Good Bye");
test();
// console.log("Good Bye");

