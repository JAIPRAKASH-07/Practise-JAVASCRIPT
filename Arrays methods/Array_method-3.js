// let number=[1,2,3,4,5];
// let length= ((number.length)/2)+.5
// let Element=0;
// if (Element==length) {
// console.log(Element);

// }


function multiplyArrayValues(arr) {
    let prev = arr[arr.length - 1]; // Initialize 'prev' with the last value
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        arr[i] = curr * prev; // Multiply current value with 'prev'
        prev = curr; // Update 'prev' for the next iteration
    }
    return arr;
}

const myArray = [2, 3, 4, 5];
const resultArray = multiplyArrayValues(myArray);
console.log(resultArray); // Output: [10, 6, 12, 20]

