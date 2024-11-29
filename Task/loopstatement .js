// console.log("***********1st question *****");
// for (let index = 0; index <=10; index++) {
//     console.log(index);
    
// }

// console.log("***********2nd  question *****");
// for (let i = 1; i <5; i++) {
//     const sq= i**2;
//     console.log(sq);
    
// }

console.log("***********3rd question *****");
function rstring(srt) {
    var re="";
    for (let indexs = srt.length - 1; indexs >=0; indexs--) {
        re+=srt[indexs];
        
    }
    console.log(re);
}
rstring("hello");