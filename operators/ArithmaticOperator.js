//Addition 
let sum = 10 + 20;
console.log(sum);

let a = 20;
let b = 60;
let sum1 = a + b;
console.log(sum1);

//concatination
let str1 = "Ram";
let str2 = "syam"
console.log(str1+str2);

let num1 = '10';
let num2 = '20';
let sum2 = num1 + num2;
console.log(sum2);

let sum3 = 10 + '20';
console.log(sum3);

let netPrice    = 9.99,
    shippingFee = 1.99;
let grossPrice  = netPrice + shippingFee;
console.log(netPrice);


let res1 = NaN + '';
console.log(res1);

let res2 = Infinity + Infinity;
console.log(res2);


//Subtraction operator (-)
let x1 = 10;
let x2 = '5';//JE will convert this to number
console.log(x1-x2);

console.log(10 - false);//false -> 0
console.log(10 - true);//true -> 1

console.log(10 + false);//false -> 0
console.log(10 + true);//true -> 1

console.log(20 + '10');//concatination Number()
console.log(20 - '10');//Substraction
console.log(20 - '10A');//NaN

console.log(20 - null);//null -> 0
console.log(20 + null);

let v;
console.log(v + 10);//NaN
console.log(undefined + 10);//NaN

console.log(v - 10);//NaN

//Multiplication operator (*)

console.log(10 * 10);
console.log(10 * '10');
console.log(10 * '10A');
console.log(10 * false);//false -> 0
console.log(10 * true);//true -> 1
console.log(20 * null);//null -> 0
console.log(undefined * 10);//NaN

//Divide operator (/)
let result2 = 20 / 10;
console.log(result2); // 2

let result3 = '20' / 10;
console.log(result3); // 2;

let result4 = '20A' / 10;
console.log(result4); // 2;


let energy = {
    valueOf() {
        return 100;
      },
}

let rest1 = 1000 - energy;//1000-100
console.log(rest1);

let rest2 = 1000 + energy;//1000-100
console.log(rest2);


let energy1 = {
    toString() {
        return 100;
      },
}

let rest11 = 1000 - energy1;//1000-100
console.log(rest11);

//HW + - * / do  al for object

//Remainder
console.log(10 / 2);//5
console.log(10 % 2);//0

console.log(Infinity % 2);
console.log(10 % 0);//NaN

console.log(Infinity % Infinity); //NaN

console.log(100 % Infinity);
console.log(0 % 10);

//Number if NUm is odd or even number

console.log(10 % 2);//remainder is 0 so it is even number
console.log(9 % 2);//remainder is 1 so it is odd number

let rem = (10%2 == 0)
console.log(rem);

let rem1 = (11%2 == 0)
console.log(rem1);

//Assignment Operators (=)
let xy = 10;
console.log(xy);

let xy1 = xy;
console.log(xy1);

//Unary plus (+)
//let uo = '10';
let uo = '10A';
// console.log(typeof uo);
let uo1 = +uo;
// console.log(typeof uo1);
// console.log(uo1);


let uob = true;
console.log(typeof uob);//booelan
let uob1 = +uob; //Number()
console.log(typeof uob1);//number
console.log(uob1);


let person1 = {
    name: 'John',
    toString: function () {
      return '25';
    },
  };

  console.log(+person1);

  function fn(){
    return "40";
  }

  let rest = fn();
  console.log(+rest);

//Increment / Decrement operators

// let count = 10;
// //count = count + 1
// count++;
// console.log(count);

//2 types (++)Prefix and Postfix(++)

//(++)Prefix
let weight = 90;
weight = ++weight + 5;//1st: 1+90 = 91, then 91 +5 = 96, then 96 assign to weight
console.log(weight); // 96

//Postfix(++)
let weight1 = 90;
let newWeight = weight1++ + 5;//1st: 90 + 5 = 95, then assign the 95 to newWeight, 
                             //then increment weight + 1
console.log(newWeight); // 95
console.log(weight1); // 91

//(--)Prefix
let weight2 = 90;
let newWeight2 = --weight2 + 5;//1st: 89 + 5 = 94, then assign the 94 to newWeight, 
                             //then increment weight + 1
console.log(newWeight2); //94
console.log(weight2); //89


//Postfix(--)
let weight3 = 90;
let newWeight3 = weight3-- + 5;//1st: 90 + 5 = 95, then assign the 95 to newWeight, 
                             //then decremnt  weight - 1
console.log(newWeight3); //95
console.log(weight3); //89
let newWeight31 = weight3-- + 5
console.log(newWeight31);//94

//Comparison Operators
let r1 = 20 > 10; // true 
console.log(r1);

let r2 = 20 < 10; // false 
console.log(r2);

let r3 = 20 < 100; //  
console.log(r3);

let r4 = 20 <= 20; // false 
console.log(r4);

let r5 = 20 >= 20; // false 
console.log(r5);

let aa = 10;
let bb = 20;

let r6 = aa > bb
console.log(r6);

//== equality comparison operator

let r7 = 10 == 10;
console.log(r7);

let r8 = 10 == 11;
console.log(r8);

let r9 = aa == bb
console.log(r9);

//!= operator
let r10 = 10 != 10;
console.log(r10);//false

let r11 = 10 != 11;
console.log(r11);//true


//string comparison
let name1 = 'alice',
    name2 = 'bob'; 
//Dictionary order
let result = name1 < name2;
console.log(result);//true

let result1 = name1 > name2;
console.log(result1);//true

let resname = name1 == 'alice';
console.log(resname);

//

let vala = 10;
let valres = vala < '20';
console.log(valres);

console.log(10 == '10'); // true
console.log(10 == '10A'); // false


console.log(true > 0); // true ==> 1 > 0

//null
//undefined

console.log(null == undefined); // true

console.log(NaN == NaN);


console.log(10 == '10'); // true, datatypes are not required to same but value should be same

console.log(10 === '10');//datatypes must required to be same

console.log(null === undefined);//false

//Logical Operators
//AND(&&), OR(||) NOT(!)

let an1 = 10;
let an2 = 20;

let rest3 = an1 > 5;
console.log(rest3);

let rest4 = an2 > 18;
console.log(rest4);
            //   true && true => true
let combres = an1 > 5 && an2 > 18;
console.log(combres);

console.log(true && false);

console.log(true && true && true && false);//true


let rest5 = an1 > 5; //true
console.log(rest3);

let rest6 = an2 < 18;
console.log(rest6); //false

// console.log(rest5 && rest6);//false
console.log(rest5 || rest6);//true

console.log(false || false);//false

console.log(true || true || true || false);//true


//NOT
let abool = true;
console.log(!abool);//false

let bb1;
console.log(!bb1);

//! => chnaged to true

console.log(!true);//false
console.log(!!true);//true -> false -> true

let sumas = 0;
let asa = 10;
// sumas = sumas + asa;
sumas += asa;

let subs = 20;
// subs = subs - asa;
subs -= asa;


