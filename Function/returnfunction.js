

// function outer () {
// function inner() {
//    return "hello world"; 
// }
// return inner ;
// }
// let stering=outer();
// let m= stering();
// console.log(m);

// apply the return as arrgument drect function name  
// function outer (a,b) {
// function inner(a,b) {
//    return a+b; 
// }
// return inner ;
// }
// let stering=outer();
// let m= stering(10,20);
// console.log(m);

// apply the return as arrgument drect function 
// function outer (a,b) {
//     function inner(y,z) {
//        return y+z; 
//     }
    
//     return inner(a,b) ;
//     // return a+b;s
//     }
//     let add=outer(10,20);
//     // let m= add(10,20);
//     console.log(add);
    

// apply the return as arrgument drect function 
let outer =function  (a,b) {
    let inner=function (y,z) {
       return y+z; 
    }
    
    return inner(a,b);
    // return a+b;
    }
    //outer(10,20);
    // let m= add(10,20);
    console.log(outer(10,20));
    