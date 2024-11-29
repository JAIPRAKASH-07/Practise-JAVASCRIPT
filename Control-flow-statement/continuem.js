// //a continue in a for loop to display the odd number in the console:

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// //the continue statement with a label:

// outer: for (let i = 1; i < 4; i++) {
//   for (let j = 1; j < 4; j++) {
//     if (i + j == 3) continue outer;
//     console.log(i, j);
//   }
// }

// //the continue statement in a while loop to display the odd numbers from 1 to 10:

// let i = 0;
// while (i < 10) {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

//the continue statement with a label:

outer: for (let i = 1; i < 4; i++) {
  for (let j = 1; j < 4; j++) {
    if (i + j == 3) continue outer;
    console.log(i, j);
  }
}