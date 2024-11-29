// es6 rest parameter
//Rest parameter allows a function to accept an indefinite number of arguments as an array. 
//It is represented by three dots (…) followed by the parameter name and must be the last
// parameter in the function, enabling flexible and dynamic argument handling.
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2)); 
console.log(fun(1, 2, 3));
console.log(fun(1, 2, 3, 4, 5));                 
