
function fn(){
    console.log("Good Morning");
}

//fn();

function add(){
    let x = 40;
    let y = 60;
    let z =  x + y;
    console.log(z);
}

//add();

//HW try substract, multiplication, etc


function add1(x, y){   
    let z =  x + y;
    console.log(z);
}

//add1(10, 20);

function add2(x, y){   
    console.log(x, y);
    let z =  x + y;//10+undefined = NaN , undefined+undefined = NaN
    console.log(z);
    console.log(typeof z);
}

// add2(100, 200);//arguments
// add2("100", "200");
// add2("100", 200);
// add2("Ram", "Sita");

// add2(10, 20, 30);

// add2(10);
//add2("Ram");
//add2();
// add2(200, undefined);

//add2(undefined, undefined);

// add2(10,undefined, undefined);
//add2(10, 20,undefined, undefined);
add2(10, undefined, 20,undefined, undefined);





