//JavaScript while loop example


// let count = 1;
// while (count < 10) {
//     console.log(count);
//     count +=2;
//}
//nested while loop
// let i=0;
// while(i<5){
//     let j=0;
//     while (j<5) {
//         console.log(i + "is the value " + j);
//         //console.log(j);
//         j++;
//     }
// i++;
// }

// // while in for 
// let i=0;
// while(i<3){
//    for( let j=0; j<5;j++) {
//         console.log(i + "is the value " + j);
//         //console.log(j);
        
//     }
// i++;
// }

// // break sta.
// let x=0;
// while(x<8){
//   if (x==6){
   
//     break;
//   }
// x++;
// console.log(x);
// }
//nested in break

let x=0;
while(x<8){
    let y=0;
    while (y<7) {
        
  if (y==4 && x==5){
   
    break;
   
  }
  y++;
  
}
x++;
console.log(x  +" is yellow " + y);
}
//  console.log("===================================================================");
// //JavaScript do while statement example

// let count1 = 0;
// do {
//   console.log(count1);
//   count1++;
// } while (count1 < 5)
