//Arithmetic Operators
//A :addtion operator 
let a=10;
let b=20;
let sum =a+b;
console.log(sum);


console.log("==================================");

//addition operator to concatenate two strings:

let x = '10',
    y = '20';
let result = x + y;

console.log(result);


console.log("==================================");
//addition operator to calculate the sum of a number and a string:

let result1 = 10 + '20';

console.log(result1);    


//addition operator with special numbers:
//case1:If either value is NaN, the result is NaN
let apple= NaN+'';
console.log(apple);

//case2:Infinity + Infinity = Infinity
let apple1=Infinity + Infinity ; 
console.log(apple1);

//case3:-Infinity + ( -Infinity) = – Infinity
let apple2=-Infinity + ( -Infinity) ;
console.log(apple2);

//case4:Infinity + -Infinity = NaN
let apple3= Infinity + -Infinity ;
console.log(apple3);

//case5:+0 + (+0) = +0
let apple4=+0 + (+0) ;
console.log(apple4);

//case6:-0 + (+0) = +0
let apple5=-0 + (+0) ;
console.log(apple5);

//case7:	-0 + (-0) = -0
let apple6=	-0 + (-0);
console.log(apple6);

console.log("==================================");
//B :Subtraction operator
let a1=20;
let b2=10;
let sub =a1-b2;
console.log(sub);

//Subtraction operator with special numbers:
//case1:If either value is NaN, the result is NaN
let ball= NaN-'';
console.log(ball);

//case2:Infinity - Infinity = NaN
let ball1=Infinity - Infinity ; 
console.log(ball1);

//case3:-Infinity - ( -Infinity) = NaN
let ball2=-Infinity - ( -Infinity) ;
console.log(ball2);

//case4:Infinity - (-Infinity) = Infinity
let ball3= Infinity - (-Infinity );
console.log(ball3);

//case5:+0 - (+0) = 0
let ball4=+0 - (+0) ;
console.log(ball4);

//case6:-0 - (+0) = 0
let ball5=-0 - (+0) ;
console.log(ball5);

//case7:	-0 - (-0) = 0
let ball6=	-0 - (-0);
console.log(ball6);

console.log("==================================");
//C :Multiplication operator
let A=20;
let B=10;
let Mul =A*B;
console.log(Mul);



//multiply operator with special numbers:
//case1:If either value is NaN, the result is NaN
let cat= NaN*'';
console.log(cat);

//case2:Infinity * 0 = NaN
let cat1=Infinity * 0  ; 
console.log(cat1);

//case3:	-Infinity * 100 = -Infinity
let cat2=	-Infinity * 100 ;
console.log(cat2);

//case4:Infinity * (-100) = -Infinity
let cat3= Infinity * (-100);
console.log(cat3);

//case5:Infinity * Infinity = Infinity
let cat4=Infinity * Infinity;
console.log(cat4);

console.log("==================================");

//D :Division operator
let A1=20;
let B1=10;
let Div =A1/B1;
console.log(Div);

//Division operator with special numbers:
//case1:If either value is NaN, the result is NaN
let dog= NaN-'';
console.log(dog);

//case2:1/0 = Infinity
let dog1=1/0 ; 
console.log(dog1);

//case3:Infinity / Infinity = NaN
let dog2=Infinity / Infinity  ;
console.log(dog2);

//case4:0/0 = NaN
let dog3= 0/0 ;
console.log(dog3);

//case5:Infinity / 2 = Infinity
let dog4=Infinity / 2  ;
console.log(dog4);

//case6:Infinity / -2 = -Infinity
let dog5=Infinity / -2  ;
console.log(dog5);

console.log("**********************************************************************************************************************");
//JavaScript arithmetic operators with objects
//If a value is an object, the JavaScript engine will call the valueOf() method of the object to get the value for calculation. For example:

let energy = {
  valueOf() {
    return 100;
  },
};

let currentEnergy = energy - 10;
console.log(currentEnergy);

currentEnergy = energy + 100;
console.log(currentEnergy);

currentEnergy = energy / 2;
console.log(currentEnergy);

currentEnergy = energy * 1.5;
console.log(currentEnergy);

console.log("*/*/*/*/*/*************************************************************************/*/*/*/*/*");
//If the object doesn’t have the valueOf() method but has the toString() method, the JavaScript engine will call the toString() method to get the value for calculation. For example:

let energy1 = {
  toString() {
    return 50;
  },
};

let currentEnergy1 = energy1 - 10;
console.log(currentEnergy1);

currentEnergy1 = energy1 + 100;
console.log(currentEnergy1);

currentEnergy1 = energy1 / 2;
console.log(currentEnergy1);

currentEnergy1 = energy1 * 1.5;
console.log(currentEnergy1);