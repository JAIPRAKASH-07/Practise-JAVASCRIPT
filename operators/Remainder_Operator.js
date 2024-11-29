// The following shows the equation for the remainder:

// dividend = divisor * quotient + remainder
// where |remainder| < |divisor|

//Using the remainder operator with a positive dividend example

var remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1
console.log("*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*--/--");
//Using the remainder operator with a negative dividend example
let remainder1 = -5 % 3;
console.log(remainder1); // -2

remainder1 = -5 % -3;
console.log(remainder1); // -2

console.log("*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*--/--");
//Using the remainder operator special values

//If a dividend is an Infinity and a divisor is a finite number, the remainder is NaN. For example:

let remainderA = Infinity % 2;
console.log(remainderA); // NaN
//If a dividend is a finite number and a divisor is zero, the remainder is NaN:

let remainderF = 10 % 0;
console.log(remainderF); // NaN
//If both dividend and divisor are Infinity, the remainder is NaN:

let remainderB = Infinity % Infinity;
console.log(remainderB); // NaN
//If a dividend is a finite number and the divisor is an Infinity, the remainder is the dividend. For example:

let remainderC = 10 % Infinity;
console.log(remainderC); // 10
//If the dividend is zero and the divisor is non-zero, the remainder is zero:

let remainderD = 0 % 10;
console.log(remainderD); // 0
//If either dividend or divisor is not a number, it’s converted to a number using the Number() function and applied the above rules. For example:

let remainderE = '10' % 3;
console.log(remainderE); // 1

console.log("*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*--/-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*--/-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*--/--");
