// //case1:Assigns the value of b to a.
 a = b	
// //case2:Assigns the result of a plus b to a.	
// A += B	
// //case3:Assigns the result of a minus b to a. 
// a -= b	
// //case4:Assigns the result of a times b to a.	
// a *= b	
// //case5:Assigns the result of a divided by b to a.
// a /= b	
// //case6:Assigns the result of a modulo b to a.
// a %= b	
// //case7: Assigns the result of a AND b to a.
// a &=b	
// //case8 :Assigns the result of a OR b to a.	
// a |=b	
// //case9: Assigns the result of a XOR b to a.
//a ^=b
// //case10:	Assigns the result of a shifted left by b to a.[a = a << b	]
//a <<= b	
// //case11: {a = a >> b}	Assigns the result of a shifted right (sign preserved) by b to a.
//a >>= b	
// //case12:{a = a >>> b}	Assigns the result of a shifted right by b to a.
var a=2,b=2; 
//a >>>= b	
console.log(a,b);
//Chaining JavaScript assignment operators
//If you want to assign a single value to multiple variables, you can chain the assignment operators. For example:

// let a = 10, b = 20, c = 30;
// a = b = c; // all variables are 30

//In this example, JavaScript evaluates from right to left. Therefore, it does the following:

// let a = 10, b = 20, c = 30;

// b = c; // b is 30
// a = b; // a is also 30 
