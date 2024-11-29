//simple JavaScript for loop example

for (let i = 1; i < 5; i++) {
  console.log(i);
}

//JavaScript for loop without the initializer example


let j = 1;
for (; j < 10; j += 2) {
  console.log(j);
}

//Using the JavaScript for loop without the condition example

for (let k = 1; ; k += 3) {
  console.log(k);
  if (k > 10) {
    break;
  }
}

//JavaScript for loop statement without any expression example

let a = 1;
for (;;) {
  if (a > 10) {
    break;
  }
  console.log(a);
  a ++;
}

//the JavaScript for loop without the loop body example

let sum = 0;
for (let b = 30; b <= 39; b++, sum += b);
console.log(sum);


//Display Text Multiple Times
for (var i = 0; i < 3; i++) {
  let name = "John doe";
  console.log("Hi, my name is " + name );
}