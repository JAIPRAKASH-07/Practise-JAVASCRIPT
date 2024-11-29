//case 1
let x=[10,20,101,96, 205, 88, 56,72]

let y=x.sort();
console.log(x);

//case 2
let x1=[10,20,101,96, 205, 88, 56,72]

let y1=x1.sort((a,b)=>(a-b));
console.log(y1);


//case 3
let x2=[10,20,101,96, 205, 88, 56,72]

let y2=x2.sort((a,b)=>(b-a));
console.log(y2);
