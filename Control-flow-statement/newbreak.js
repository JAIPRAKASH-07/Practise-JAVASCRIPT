// //If you use a break statement inside an inner loop, it only terminates the enclosing loop. For example:

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     if (i + j == 4) {
//       break;
//     }
//     console.log(i, j);
//   }
// }

// //if the sum of i and j is 4, the break statement terminates the inner loop. To terminate the nested loop, you use a label statement. For example:

// outer: for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     if (i + j == 4) {
//       break outer;
//     }
//     console.log(i, j);
//   }
// }

// //Like a for loop, the break statement terminates a while loop prematurely. For example:

// let i = 0;

// while (i < 5) {
//   i++;
//   console.log(i);
//   if (i == 3) {
//     break;
//   }
// }

// //The following example uses a do...while statement to output five numbers from 0 to 5 to the console:

// let i = 0;

// do {
//   i++;
//   console.log(i);
// } while (i < 5);

//Like a while loop, you can use a break statement to terminate a do...while loop. For example:

let i = 0;

do {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
} while (i < 5);